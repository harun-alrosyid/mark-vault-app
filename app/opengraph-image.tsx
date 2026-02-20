import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "MarkVault - Professional Image Protection & Watermarking";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(to bottom right, #0a0a0a, #1a1a1a)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "80px",
                    fontFamily: "Inter, sans-serif",
                    color: "white",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "40px",
                        background: "#3e3e3e",
                        width: "120px",
                        height: "120px",
                        borderRadius: "30px",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                    }}
                >
                    <span style={{ fontSize: "60px", fontWeight: "bold" }}>🔐</span>
                </div>

                <h1
                    style={{
                        fontSize: "80px",
                        fontWeight: "bold",
                        margin: "0 0 20px 0",
                        background: "linear-gradient(to right, #a855f7, #ec4899, #ef4444)",
                        backgroundClip: "text",
                        color: "transparent",
                        textAlign: "center",
                    }}
                >
                    MarkVault
                </h1>

                <p
                    style={{
                        fontSize: "40px",
                        color: "#a3a3a3",
                        margin: 0,
                        textAlign: "center",
                        maxWidth: "800px",
                        lineHeight: 1.4,
                    }}
                >
                    Professional Image Protection & Intelligent Watermarking
                </p>
            </div>
        ),
        {
            ...size,
        }
    );
}
