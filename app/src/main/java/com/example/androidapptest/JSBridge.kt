package com.example.androidapptest

import android.util.Log
import android.webkit.JavascriptInterface

class JSBridge {
    @JavascriptInterface
    fun onTxHash(hash: String) {
        Log.d("DAPP", "txHash=$hash")
    }
}
