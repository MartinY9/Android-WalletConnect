package com.example.androidapptest.web

import android.content.Context
import fi.iki.elonen.NanoHTTPD
import java.io.ByteArrayInputStream

class LocalAssetServer(
    private val context: Context,
    port: Int
) : NanoHTTPD("127.0.0.1", port) {

    override fun serve(session: IHTTPSession): Response {
        val uri = session.uri ?: "/"
        // 只允许 /dapp/ 下访问
        if (!uri.startsWith("/dapp/")) {
            return newFixedLengthResponse(Response.Status.NOT_FOUND, "text/plain", "404")
        }

        // /dapp/index.html -> assets/dapp/index.html
        val assetPath = uri.removePrefix("/") // remove leading "/"
        return try {
            val bytes = context.assets.open(assetPath).use { it.readBytes() }
            val mime = guessMime(assetPath)
            val res = newFixedLengthResponse(Response.Status.OK, mime, ByteArrayInputStream(bytes), bytes.size.toLong())
            // 允许缓存关闭，方便你反复改
            res.addHeader("Cache-Control", "no-store")
            res
        } catch (e: Exception) {
            newFixedLengthResponse(Response.Status.NOT_FOUND, "text/plain", "404: $assetPath")
        }
    }

    private fun guessMime(path: String): String {
        return when {
            path.endsWith(".html") -> "text/html; charset=utf-8"
            path.endsWith(".js") -> "application/javascript; charset=utf-8"
            path.endsWith(".css") -> "text/css; charset=utf-8"
            path.endsWith(".json") -> "application/json; charset=utf-8"
            path.endsWith(".png") -> "image/png"
            path.endsWith(".jpg") || path.endsWith(".jpeg") -> "image/jpeg"
            path.endsWith(".svg") -> "image/svg+xml"
            else -> "application/octet-stream"
        }
    }
}
