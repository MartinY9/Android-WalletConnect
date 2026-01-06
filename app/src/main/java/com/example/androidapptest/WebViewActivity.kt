package com.example.androidapptest

import android.os.Bundle
import android.util.Log
import android.webkit.ConsoleMessage
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.core.view.WindowCompat
import com.example.androidapptest.web.LocalAssetServer
import fi.iki.elonen.NanoHTTPD
import kotlin.random.Random

class WebViewActivity : ComponentActivity() {

    private var server: LocalAssetServer? = null
    private var port: Int = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // ✅ 关闭 edge-to-edge，避免 WebView 被状态栏遮挡
        WindowCompat.setDecorFitsSystemWindows(window, true)

        // ✅ 启动本地 HTTP Server
        startLocalServer()

        // ✅ 创建 WebView
        val webView = WebView(this)
        setContentView(webView)

        // ✅ WebView 设置（关键）
        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            allowFileAccess = true
            allowContentAccess = true
        }

        // ✅ 处理页面跳转
        webView.webViewClient = WebViewClient()

        // ✅ 打印 JS console.log / error（非常重要）
        webView.webChromeClient = object : WebChromeClient() {
            override fun onConsoleMessage(cm: ConsoleMessage): Boolean {
                Log.d(
                    "WebView",
                    "${cm.message()}  @${cm.sourceId()}:${cm.lineNumber()}"
                )
                return true
            }
        }

        // ✅ JS → Android 通信
        webView.addJavascriptInterface(JSBridge(), "Android")

        // ✅ 加载本地 H5（命中 LocalAssetServer）
        val url = "http://127.0.0.1:$port/dapp/index.html"
        Log.d("WebView", "Loading $url")
        webView.loadUrl(url)
    }

    private fun startLocalServer() {
        try {
            port = 49152 + Random.nextInt(16384)
            server = LocalAssetServer(this, port)
            server?.start(NanoHTTPD.SOCKET_READ_TIMEOUT, false)
            Log.d("WebView", "LocalAssetServer started on port $port")
        } catch (e: Exception) {
            Log.e("WebView", "Failed to start LocalAssetServer", e)
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        server?.stop()
        Log.d("WebView", "LocalAssetServer stopped")
    }
}

/**
 * JS → Android Bridge
 * 在 JS 中可通过 window.Android.xxx 调用
 */

