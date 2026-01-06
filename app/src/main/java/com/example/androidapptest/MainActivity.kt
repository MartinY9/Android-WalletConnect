package com.example.androidapptest

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.browser.customtabs.CustomTabsIntent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import java.net.URLEncoder

class MainActivity : ComponentActivity() {

    private var callbackText by mutableStateOf("No callback yet")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Handle the bounce-back from the wallet / H5
        handleDeepLink(intent)

        setContent {
            MaterialTheme {
                Column(
                    modifier = Modifier
                        .fillMaxSize()
                        .systemBarsPadding()
                        .padding(16.dp)
                ) {
                    Text("AndroidAppTest")
                    Spacer(Modifier.height(12.dp))

                    Button(onClick = { openDappInChrome() }) {
                        Text("Open DApp in Chrome")
                    }

                    Spacer(Modifier.height(20.dp))
                    Text("Callback from DApp:")
                    Spacer(Modifier.height(8.dp))
                    Text(callbackText)
                }
            }
        }
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        handleDeepLink(intent)
    }

    /**
     * 用 Chrome / Custom Tabs 打开公网 DApp
     */
    private fun openDappInChrome() {
        val returnUrl = "myapp://wc"
        val encodedReturnUrl = URLEncoder.encode(returnUrl, "UTF-8")

        // 🔑 The Vercel address that you have already deployed
        val dappUrl =
            "Your URL" +
                    "?returnUrl=$encodedReturnUrl"

        val customTabsIntent = CustomTabsIntent.Builder()
            .setShowTitle(true)
            .build()

        customTabsIntent.launchUrl(this, Uri.parse(dappUrl))
    }

    /**
     * Receive H5 / Wallet Redirect
     * myapp://wc?event=connected&address=...&balance=...
     * myapp://wc?event=tx&txHash=...
     */
    private fun handleDeepLink(intent: Intent) {
        val data = intent.data ?: return
        if (data.scheme != "myapp" || data.host != "wc") return

        val event = data.getQueryParameter("event") ?: "unknown"
        val status = data.getQueryParameter("status") ?: "ok"

        val address = data.getQueryParameter("address")
        val balance = data.getQueryParameter("balance")
        val txHash = data.getQueryParameter("txHash")

        callbackText = buildString {
            appendLine("event=$event status=$status")
            if (!address.isNullOrBlank()) appendLine("address=$address")
            if (!balance.isNullOrBlank()) appendLine("balance=$balance")
            if (!txHash.isNullOrBlank()) appendLine("txHash=$txHash")
        }
    }
}
