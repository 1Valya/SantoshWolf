import Button from "@/components/buttons/Button"

export default function DeployButton() {
  const handleClick = () => {
    window.open('https://arlink.arweave.net/', '_blank')
  }

  return (
    <Button
      onClick={handleClick}
      className={`bg-black hover:bg-black/90 text-white gap-2 rounded-md px-4 py-1 items-center inline-flex`}
    >
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64">
        <path d="M34.586 16.785c0.122 0.183 0.108 0.283 0.076 0.496 -0.08 0.334 -0.222 0.646 -0.353 0.961l-0.174 0.421 -0.078 0.187c-0.064 0.142 -0.064 0.142 -0.057 0.275l0.172 0.095a33 33 0 0 1 1.595 0.945 38.5 38.5 0 0 0 1.019 0.614l0.123 0.071 0.605 0.349 0.224 0.13 0.199 0.115c0.509 0.326 0.509 0.326 0.625 0.557 0.029 0.321 0.053 0.633 -0.082 0.929 -0.203 0.16 -0.413 0.275 -0.642 0.394 -0.247 0.133 -0.486 0.277 -0.725 0.423l-0.143 0.088a227 227 0 0 0 -1.401 0.873 168 168 0 0 1 -1.089 0.676l-0.484 0.3a35 35 0 0 1 -0.625 0.38l-0.293 0.179 -0.137 0.079c-0.238 0.148 -0.305 0.196 -0.376 0.48l-0.003 0.199c0.452 -0.059 0.709 -0.211 1.067 -0.488a6.5 6.5 0 0 1 0.553 -0.367c0.341 -0.206 0.675 -0.421 1.008 -0.64a48 48 0 0 1 1.578 -0.985 33 33 0 0 0 1.588 -1.006c0.265 -0.179 0.535 -0.351 0.805 -0.522 0.147 -0.093 0.276 -0.18 0.399 -0.304 0.461 -0.135 0.816 0.053 1.224 0.275a22 22 0 0 1 0.503 0.307l0.188 0.116q0.293 0.181 0.586 0.364l0.374 0.233 1.125 0.705 0.773 0.484 0.188 0.117a53.5 53.5 0 0 0 0.872 0.536l0.156 0.093q0.142 0.085 0.284 0.169c0.255 0.153 0.469 0.307 0.663 0.536 0.051 0.238 0.051 0.238 0.063 0.438l0.148 0.051c0.164 0.074 0.164 0.074 0.289 0.262 0.016 0.128 0.016 0.128 0.017 0.276l0.002 0.171 -0.001 0.188 0.001 0.198q0.002 0.325 0.001 0.649l0.001 0.452v0.95q-0.001 0.606 0.002 1.212l0.001 0.935q0 0.224 0.001 0.447 0.001 0.314 -0.001 0.627l0.002 0.184c-0.005 0.672 -0.131 1.321 -0.587 1.836 -0.334 0.327 -0.72 0.563 -1.117 0.804l-0.402 0.248 -0.208 0.129a86 86 0 0 0 -1.018 0.646l-0.2 0.128a187.5 187.5 0 0 0 -0.965 0.623 106.5 106.5 0 0 1 -2.152 1.359l-0.165 0.106c-0.147 0.082 -0.147 0.082 -0.328 0.077a1.35 1.35 0 0 1 -0.414 -0.199c-0.207 -0.135 -0.207 -0.135 -0.395 -0.059a24 24 0 0 0 -0.331 0.231 22 22 0 0 1 -1.185 0.777 127 127 0 0 0 -1.609 1.016c-0.55 0.353 -1.101 0.706 -1.655 1.052a36.5 36.5 0 0 0 -0.644 0.415l-0.353 0.228 -0.165 0.111c-0.25 0.16 -0.388 0.245 -0.69 0.244 -0.193 -0.061 -0.193 -0.061 -0.38 -0.186l-0.11 0.09c-0.141 0.098 -0.223 0.136 -0.391 0.16 -0.116 -0.037 -0.116 -0.037 -0.233 -0.101l-0.133 -0.071a16 16 0 0 1 -0.658 -0.406 115.5 115.5 0 0 0 -1.755 -1.093l-0.202 -0.124 -0.18 -0.111a12.5 12.5 0 0 1 -0.339 -0.219h-0.188c-0.083 0.087 -0.083 0.087 -0.154 0.209l-0.09 0.142 -0.099 0.16 -0.22 0.345 -0.12 0.191c-0.208 0.327 -0.422 0.649 -0.635 0.973a123 123 0 0 0 -0.971 1.494L25.515 45l-0.324 0.51 -0.116 0.182 -0.1 0.159c-0.301 0.447 -0.301 0.447 -0.566 0.533 -0.223 -0.008 -0.223 -0.008 -0.414 -0.125 -0.121 -0.196 -0.121 -0.196 -0.085 -0.433 0.104 -0.413 0.246 -0.815 0.384 -1.218l0.088 -0.261 0.233 -0.684 0.185 -0.546q0.528 -1.56 1.073 -3.115l-0.097 -0.061 -0.13 -0.082 -0.135 -0.086 -0.279 -0.177 -0.121 -0.076 -0.124 -0.079c-0.121 -0.074 -0.121 -0.074 -0.3 -0.127l-0.141 0.117c-0.223 0.172 -0.327 0.209 -0.61 0.196 -0.135 -0.081 -0.135 -0.081 -0.282 -0.192a17 17 0 0 0 -1.057 -0.696l-0.401 -0.249 -0.199 -0.123a232.5 232.5 0 0 1 -2.754 -1.749l-0.503 -0.321 -0.281 -0.179 -0.124 -0.078c-0.386 -0.247 -0.749 -0.506 -0.981 -0.91l-0.089 -0.15c-0.205 -0.431 -0.223 -0.82 -0.223 -1.291l-0.002 -0.205q-0.002 -0.335 -0.003 -0.67l-0.002 -0.467q-0.002 -0.488 -0.002 -0.977 -0.001 -0.501 -0.004 -1.003 -0.004 -0.607 -0.004 -1.212 -0.001 -0.231 -0.003 -0.462 -0.002 -0.323 -0.001 -0.645l-0.003 -0.193c0.003 -0.295 0.007 -0.433 0.187 -0.676 0.166 -0.115 0.166 -0.115 0.353 -0.115l0.011 -0.199c0.076 -0.359 0.303 -0.518 0.601 -0.713l0.282 -0.174 0.157 -0.098 0.336 -0.208q0.266 -0.165 0.53 -0.331a281.5 281.5 0 0 1 2.569 -1.591l0.609 -0.377 0.387 -0.239 0.177 -0.112c0.407 -0.251 0.784 -0.459 1.28 -0.397 0.201 0.11 0.201 0.11 0.399 0.25l0.201 0.141 0.151 0.11 0.02 -0.122c0.079 -0.46 0.19 -0.905 0.316 -1.355l0.061 -0.221 0.128 -0.459 0.194 -0.701 0.124 -0.448 0.058 -0.21a23.5 23.5 0 0 1 0.161 -0.546l0.04 -0.138c0.076 -0.221 0.131 -0.291 0.342 -0.397 0.24 -0.095 0.486 -0.163 0.737 -0.225l0.143 -0.036 0.469 -0.117 0.333 -0.084 0.878 -0.221 0.871 -0.219q0.511 -0.129 1.022 -0.257a154 154 0 0 0 1.433 -0.363l0.561 -0.144 0.258 -0.068 0.351 -0.091 0.197 -0.051c0.257 -0.041 0.421 -0.01 0.637 0.132m-1.875 1.157 -0.167 0.042 -0.546 0.138 -0.38 0.096 -0.796 0.202 -1.02 0.258 -0.784 0.198 -0.376 0.095 -0.526 0.134 -0.157 0.04c-0.443 0.081 -0.443 0.081 -0.774 0.337l-0.036 0.131 -0.045 0.154 -0.047 0.174 -0.054 0.189a68 68 0 0 0 -0.155 0.557q-0.099 0.353 -0.199 0.706a420 420 0 0 0 -0.517 1.848l-0.151 0.545c-0.428 1.536 -0.855 3.074 -1.271 4.614a413.5 413.5 0 0 1 -0.4 1.462l-0.235 0.857 -0.195 0.708 -0.182 0.665 -0.101 0.365c-0.095 0.348 -0.185 0.686 -0.222 1.046l0.123 -0.028c3.466 -0.781 3.466 -0.781 4.612 -1.027l0.254 -0.055 0.344 -0.073 0.187 -0.04c0.415 -0.068 0.415 -0.068 0.628 0.067 0.144 0.222 0.09 0.409 0.039 0.656a7 7 0 0 1 -0.163 0.449l-0.051 0.128 -0.109 0.273q-0.118 0.296 -0.235 0.593l-0.125 0.316c-0.369 0.935 -0.724 1.876 -1.079 2.816l-0.27 0.709q-0.112 0.293 -0.223 0.588l-0.081 0.208 -0.07 0.188 -0.061 0.161c-0.05 0.144 -0.05 0.144 0.028 0.322 0.117 0.077 0.117 0.077 0.254 0.137l0.139 0.065 0.107 0.049 0.115 -0.172 0.313 -0.469 0.091 -0.137 0.238 -0.356a323.5 323.5 0 0 0 1.237 -1.869 578.5 578.5 0 0 1 2.296 -3.462L32.6 32.505l0.379 -0.568 0.766 -1.149q0.503 -0.753 1.004 -1.508l0.38 -0.572 0.176 -0.266q0.121 -0.183 0.243 -0.365l0.137 -0.206c0.127 -0.183 0.127 -0.183 0.268 -0.355 0.121 -0.127 0.121 -0.127 0.108 -0.265 -0.784 0.095 -1.546 0.289 -2.313 0.472l-0.425 0.101a234 234 0 0 0 -1.974 0.476l-0.164 0.04q-0.374 0.092 -0.749 0.185l-0.264 0.066 -0.227 0.057c-0.427 0.086 -0.427 0.086 -0.627 -0.026 -0.11 -0.189 -0.059 -0.355 -0.008 -0.558 0.092 -0.269 0.201 -0.53 0.308 -0.793l0.1 -0.245q0.14 -0.344 0.281 -0.687l0.257 -0.629a486 486 0 0 1 1.393 -3.385 348 348 0 0 0 1.179 -2.87l0.162 -0.399q0.113 -0.277 0.224 -0.553l0.069 -0.168 0.062 -0.153 0.054 -0.134c0.045 -0.11 0.045 -0.11 0.038 -0.234 -0.253 0 -0.482 0.068 -0.726 0.13M33.563 20c-0.475 1.063 -0.911 2.141 -1.34 3.224a65 65 0 0 1 -0.357 0.879l-0.089 0.218 -0.166 0.399 -0.072 0.177 -0.064 0.152c-0.042 0.157 -0.033 0.237 0.026 0.387 0.103 0.1 0.103 0.1 0.234 0.176l0.128 0.083c0.184 0.071 0.263 0.056 0.45 -0.009a7.5 7.5 0 0 0 0.422 -0.278 15 15 0 0 1 1.02 -0.644 35 35 0 0 0 1.382 -0.852 51 51 0 0 1 0.992 -0.621l0.112 -0.068q0.271 -0.166 0.543 -0.329l0.199 -0.121 0.176 -0.106c0.155 -0.105 0.278 -0.22 0.406 -0.356l-0.15 -0.087c-1.665 -0.97 -1.665 -0.97 -2.209 -1.315a41.5 41.5 0 0 0 -1.039 -0.636l-0.139 -0.083c-0.216 -0.141 -0.216 -0.141 -0.463 -0.191M22.677 24.44a60 60 0 0 1 -1.216 0.751 47 47 0 0 0 -1.397 0.876 38.5 38.5 0 0 1 -1.059 0.666c-0.188 0.116 -0.36 0.224 -0.505 0.391 0.836 0.611 1.73 1.139 2.611 1.681q0.464 0.286 0.924 0.576l0.207 0.13 0.4 0.253 0.183 0.115 0.162 0.102c0.141 0.088 0.141 0.088 0.326 0.143l0.197 -0.712 0.063 -0.225 0.442 -1.604 0.069 -0.25a228.5 228.5 0 0 1 0.392 -1.409l0.18 -0.645 0.083 -0.291a40.5 40.5 0 0 0 0.111 -0.398l0.062 -0.22c0.03 -0.2 0.018 -0.271 -0.098 -0.433 -0.112 -0.096 -0.112 -0.096 -0.242 -0.172l-0.129 -0.081c-0.531 -0.244 -1.328 0.477 -1.766 0.756m16.969 -0.682 -0.139 0.089 -0.151 0.098 -0.159 0.102 -0.337 0.216a129 129 0 0 1 -0.689 0.44l-0.345 0.22a89.5 89.5 0 0 1 -0.857 0.54l-0.165 0.102 -0.306 0.19c-0.234 0.146 -0.439 0.285 -0.625 0.494l0.063 0.063a5.5 5.5 0 0 0 0.308 -0.028c0.934 -0.089 0.934 -0.089 1.175 0.098 0.078 0.179 0.078 0.179 0.042 0.347 -0.112 0.261 -0.261 0.471 -0.428 0.699l-0.202 0.281 -0.104 0.144a41.5 41.5 0 0 0 -0.495 0.712l-0.09 0.132 -0.207 0.301c0.15 0.168 0.311 0.267 0.508 0.375l0.195 0.108 0.207 0.115 0.212 0.117q0.314 0.174 0.628 0.347l0.49 0.273 0.276 0.152 0.243 0.135q0.12 0.067 0.241 0.133c0.305 0.168 0.305 0.168 0.374 0.307 0.191 -0.039 0.334 -0.102 0.499 -0.202l0.147 -0.088 0.158 -0.097 0.167 -0.101c0.585 -0.356 1.162 -0.725 1.739 -1.095q0.379 -0.241 0.759 -0.48a332.5 332.5 0 0 0 2.844 -1.813c-0.072 -0.216 -0.104 -0.23 -0.293 -0.339l-0.149 -0.087 -0.163 -0.093q-0.173 -0.101 -0.345 -0.203l-0.181 -0.107a33 33 0 0 1 -0.857 -0.538 89 89 0 0 0 -1.966 -1.217 208 208 0 0 1 -0.803 -0.49l-0.385 -0.235a16 16 0 0 1 -0.282 -0.178c-0.229 -0.125 -0.349 -0.074 -0.554 0.059M31 26.25l-0.061 0.148 -0.083 0.199 -0.086 0.207a20.5 20.5 0 0 1 -0.196 0.449c-0.086 0.179 -0.086 0.179 -0.074 0.371l0.488 -0.121 0.14 -0.035c0.189 -0.047 0.375 -0.096 0.559 -0.157 0.018 -0.383 0.018 -0.383 -0.063 -0.75 -0.195 -0.182 -0.353 -0.313 -0.625 -0.313m4.75 0 -0.125 0.125h0.313zM18 27.938a537.5 537.5 0 0 0 -0.017 2.492q-0.002 0.579 -0.007 1.157 -0.005 0.558 -0.006 1.117 -0.001 0.213 -0.004 0.426a49 49 0 0 0 -0.003 0.598l-0.004 0.177c0.003 0.401 0.1 0.657 0.351 0.971 0.114 0.119 0.114 0.119 0.235 0.197l0.131 0.09 0.135 0.088 0.133 0.087a27 27 0 0 0 0.418 0.265l0.316 0.198 0.162 0.101q0.378 0.236 0.753 0.475l0.297 0.188 1.038 0.655q0.383 0.242 0.765 0.485l0.159 0.101 0.298 0.19a16.5 16.5 0 0 0 0.974 0.569c0.174 -0.247 0.21 -0.414 0.209 -0.715v-0.242l-0.003 -0.261 -0.001 -0.268a112.5 112.5 0 0 0 -0.004 -0.703q-0.003 -0.359 -0.004 -0.718 -0.003 -0.704 -0.009 -1.407l-0.268 0.029 -0.15 0.016a4.5 4.5 0 0 0 -0.558 0.116c-0.574 0.135 -0.574 0.135 -0.836 0.09 -0.142 -0.129 -0.142 -0.129 -0.25 -0.313a2.25 2.25 0 0 1 0.09 -0.476l0.036 -0.14q0.059 -0.224 0.123 -0.447c0.381 -1.129 0.381 -1.129 0.188 -2.25a3.5 3.5 0 0 0 -0.383 -0.274l-0.122 -0.079a44 44 0 0 0 -0.432 -0.273l-0.174 -0.109q-0.382 -0.239 -0.764 -0.477a60 60 0 0 1 -1.116 -0.71 48 48 0 0 0 -1.133 -0.715l-0.148 -0.091c-0.195 -0.143 -0.195 -0.143 -0.414 -0.209m27.621 0.257 -0.196 0.126 -0.21 0.137 -0.215 0.139q-0.313 0.202 -0.625 0.404l-0.291 0.189 -0.377 0.244a134 134 0 0 1 -2.173 1.381l-0.203 0.126 -0.386 0.238c-0.704 0.398 -0.704 0.398 -1.195 1.01 -0.027 0.201 -0.025 0.4 -0.023 0.602l-0.001 0.182q0 0.297 0.001 0.596v0.414q0 0.433 0.002 0.867 0.002 0.556 0.001 1.113l0.001 0.855 0.001 0.41q0 0.286 0.002 0.573l-0.001 0.172c-0.012 0.295 -0.012 0.295 0.142 0.529 0.28 -0.019 0.468 -0.1 0.703 -0.249l0.185 -0.117 0.195 -0.126 0.203 -0.129a114 114 0 0 0 0.591 -0.379l0.154 -0.1q0.326 -0.21 0.651 -0.421a80.5 80.5 0 0 1 0.823 -0.525l0.145 -0.092a117 117 0 0 1 0.871 -0.543l0.204 -0.127 0.395 -0.243c0.708 -0.42 0.708 -0.42 1.069 -1.135 0.025 -0.212 0.024 -0.422 0.021 -0.636v-0.187q0 -0.303 -0.003 -0.607l-0.001 -0.422q-0.002 -0.554 -0.004 -1.109l-0.004 -1.133q-0.003 -1.109 -0.009 -2.22c-0.186 0 -0.286 0.094 -0.442 0.195m-10.245 1.681c-0.111 0.134 -0.111 0.134 -0.215 0.311l-0.127 0.202 -0.131 0.214a23 23 0 0 1 -0.912 1.377 37.5 37.5 0 0 0 -0.794 1.147q-0.08 0.118 -0.16 0.235a27 27 0 0 0 -0.235 0.349l-0.139 0.205c-0.124 0.262 -0.118 0.423 -0.099 0.709l0.107 0.051c0.427 0.207 0.83 0.444 1.234 0.693l0.582 0.356 0.117 0.072q0.508 0.309 1.022 0.61 0.806 0.475 1.605 0.961l0.111 0.067a33 33 0 0 1 1.275 0.806l0.134 0.072 0.125 -0.063q0.004 -1.214 0.006 -2.429 0.001 -0.564 0.003 -1.127 0.002 -0.544 0.003 -1.088l0.002 -0.415q0.002 -0.29 0.001 -0.581l0.002 -0.173c-0.001 -0.275 -0.003 -0.501 -0.141 -0.748 -0.122 -0.103 -0.122 -0.103 -0.273 -0.18l-0.17 -0.096 -0.182 -0.099 -0.367 -0.208 -0.39 -0.217c-0.795 -0.443 -0.795 -0.443 -1.122 -0.631l-0.14 -0.08 -0.251 -0.145c-0.175 -0.1 -0.275 -0.155 -0.48 -0.155m-7.343 3.494 -0.172 0.037 -0.185 0.041 -0.191 0.042 -0.605 0.133 -0.406 0.089 -0.746 0.163 -0.151 0.033q-0.195 0.044 -0.388 0.093 -0.02 0.858 -0.029 1.716a61.5 61.5 0 0 1 -0.013 0.797 42.5 42.5 0 0 0 -0.011 0.769 14.5 14.5 0 0 1 -0.006 0.293c-0.035 0.537 -0.035 0.537 0.181 1.002 0.143 0.097 0.282 0.167 0.441 0.234a6 6 0 0 1 0.211 0.148c0.159 0.118 0.159 0.118 0.351 0.102l0.076 -0.206a221.5 221.5 0 0 1 1.776 -4.665 49.5 49.5 0 0 0 0.336 -0.878c-0.171 0 -0.303 0.02 -0.469 0.057m3.531 2.318a19.5 19.5 0 0 0 -0.322 0.474l-0.1 0.15 -0.324 0.489 -0.223 0.335 -0.447 0.672a491 491 0 0 1 -0.781 1.173c-0.223 0.333 -0.223 0.333 -0.444 0.667a16.5 16.5 0 0 1 -0.226 0.328l-0.106 0.152 -0.095 0.132 -0.059 0.116c0.081 0.241 0.167 0.269 0.383 0.398l0.203 0.123 0.219 0.131 0.334 0.202 0.225 0.136c0.388 0.234 0.769 0.476 1.151 0.721l0.135 0.086 0.116 0.074c0.117 0.071 0.238 0.133 0.361 0.192 0.059 -0.175 0.07 -0.279 0.07 -0.459l0.001 -0.168 -0.001 -0.184v-0.194l-0.001 -0.636 -0.001 -0.441 -0.002 -1.161 -0.001 -1.184q-0.001 -1.162 -0.003 -2.324zm1.025 0.14c-0.107 0.136 -0.111 0.201 -0.111 0.371l-0.001 0.161 0.002 0.176 -0.001 0.186q0 0.305 0.002 0.61l0.001 0.423q0.001 0.443 0.003 0.886 0.003 0.57 0.003 1.139l0.002 0.873 0.001 0.42q0.001 0.293 0.003 0.586v0.176l0.001 0.161 0.001 0.14c0.002 0.119 0.002 0.119 0.07 0.238a3.3 3.3 0 0 0 0.629 -0.316l0.183 -0.115 0.195 -0.123 0.203 -0.128q0.301 -0.19 0.602 -0.38l0.315 -0.198q0.437 -0.276 0.873 -0.552l0.168 -0.106A247 247 0 0 0 38 39c-0.071 -0.212 -0.096 -0.226 -0.281 -0.333l-0.143 -0.084 -0.159 -0.091 -0.345 -0.203 -0.189 -0.111c-0.314 -0.185 -0.624 -0.375 -0.934 -0.565a172 172 0 0 0 -1.938 -1.165l-0.212 -0.126q-0.275 -0.163 -0.549 -0.324l-0.14 -0.084c-0.259 -0.179 -0.259 -0.179 -0.522 -0.089m-5.9 4.735a118 118 0 0 0 -0.254 0.707l-0.074 0.203 -0.069 0.195 -0.065 0.179c-0.055 0.16 -0.055 0.16 0.024 0.341l0.371 -0.61 0.107 -0.174 0.102 -0.169 0.095 -0.155a1.3 1.3 0 0 0 0.139 -0.393c-0.176 -0.142 -0.176 -0.142 -0.375 -0.125" fill="#ffffff" /><path d="M33.563 30.938c0.035 0.117 0.035 0.117 0.063 0.25 -0.067 0.12 -0.067 0.12 -0.168 0.242l-0.105 0.132 -0.102 0.127c-0.168 0.232 -0.279 0.402 -0.313 0.688l-0.188 0.063a7 7 0 0 0 -0.188 0.313l-0.125 0.152c-0.133 0.17 -0.222 0.341 -0.313 0.535H32c0.084 -0.229 0.186 -0.416 0.325 -0.617a75.5 75.5 0 0 0 0.801 -1.211l0.13 -0.199z" fill="#ffffff" /><path d="M25.125 34h0.063v4.438L25 38.25l0.063 -0.125q0.011 -0.197 0.013 -0.393l0.002 -0.122 0.005 -0.4 0.004 -0.277 0.009 -0.73 0.01 -0.744z" fill="#ffffff" /><path d="M19.25 36.563c0.189 0.041 0.345 0.103 0.515 0.192l0.134 0.069 0.101 0.052V37l0.123 0.043c0.253 0.111 0.476 0.255 0.709 0.403l0.141 0.088q0.171 0.107 0.341 0.216l-0.063 0.125a84 84 0 0 1 -1.633 -1.008l-0.113 -0.071a9 9 0 0 1 -0.254 -0.171z" fill="#ffffff" /><path d="M37.364 26.258c0.089 0.093 0.089 0.093 0.199 0.304 -0.039 0.353 -0.298 0.652 -0.5 0.938l-0.063 -0.188a12 12 0 0 1 0.25 -0.375c0.065 -0.184 0.063 -0.297 0.063 -0.5 -0.235 -0.11 -0.416 -0.139 -0.675 -0.133l-0.185 0.004 -0.14 0.004V26.25c0.321 -0.086 0.755 -0.175 1.052 0.008" fill="#ffffff" /><path d="m35.75 27.688 0.063 0.188 -0.125 0.125 -0.051 0.176c-0.089 0.238 -0.206 0.332 -0.387 0.511a14.5 14.5 0 0 0 -0.341 0.548l-0.097 0.14h-0.125c0.086 -0.239 0.198 -0.434 0.343 -0.643l0.127 -0.185 0.133 -0.191 0.134 -0.195q0.163 -0.237 0.327 -0.473" fill="#ffffff" /><path d="M25.5 22h0.063a2.35 2.35 0 0 1 -0.105 0.797l-0.059 0.214c-0.085 0.176 -0.085 0.176 -0.251 0.264l-0.147 0.038v-0.25l-0.144 -0.051A0.87 0.87 0 0 1 24.5 22.75c0.227 0 0.296 0.059 0.48 0.188l0.153 0.105 0.117 0.082 0.023 -0.135c0.059 -0.337 0.126 -0.663 0.227 -0.99" fill="#ffffff" /><path d="M25.25 26.063h0.125l-0.117 0.504 -0.033 0.142a15.5 15.5 0 0 1 -0.225 0.854h-0.063c-0.011 -0.331 0.013 -0.56 0.125 -0.875l-0.004 -0.16c0.005 -0.2 0.073 -0.306 0.192 -0.465" fill="#ffffff" /><path d="M38 21.563c0.279 0.086 0.422 0.178 0.563 0.438 0.031 0.253 0.04 0.498 0 0.75 -0.096 0.117 -0.096 0.117 -0.188 0.188l-0.063 -0.25 0.125 -0.063c0.022 -0.353 0.022 -0.353 -0.063 -0.688a12 12 0 0 0 -0.375 -0.25z" fill="#ffffff" /><path d="m35.188 40.75 0.063 0.125c-0.359 0.313 -0.359 0.313 -0.5 0.313 -0.177 0.112 -0.35 0.23 -0.523 0.348l-0.165 0.089 -0.188 -0.063 0.586 -0.371 0.169 -0.107 0.161 -0.102 0.149 -0.095c0.123 -0.076 0.123 -0.076 0.248 -0.139" fill="#ffffff" /><path d="M30.313 41.688c0.267 0.096 0.499 0.232 0.739 0.383l0.113 0.07 0.274 0.172 -0.063 0.125c-0.259 -0.102 -0.433 -0.175 -0.625 -0.375 -0.143 -0.089 -0.289 -0.169 -0.438 -0.25z" fill="#ffffff" /><path d="M33.313 43.063c-0.594 0.412 -0.594 0.412 -0.875 0.383 -0.188 -0.07 -0.188 -0.07 -0.278 -0.199l-0.035 -0.121 0.25 0.063v0.125l0.563 -0.125v-0.125c0.155 -0.078 0.213 -0.049 0.375 0" fill="#ffffff" /><path d="M26.625 40.438c0.284 -0.023 0.284 -0.023 0.426 0.093l0.074 0.094c-0.25 0 -0.25 0 -0.438 -0.063l-0.036 0.143 -0.05 0.189 -0.049 0.187c-0.053 0.169 -0.053 0.169 -0.178 0.356 -0.07 -0.208 -0.059 -0.237 0.019 -0.429l0.053 -0.133 0.052 -0.126 0.074 -0.188z" fill="#ffffff" /><path d="M22.25 33.813c0.097 0.185 0.172 0.366 0.25 0.563l0.688 0.063c-0.27 0.135 -0.392 0.167 -0.688 0.125 -0.188 -0.164 -0.188 -0.164 -0.313 -0.375 0.011 -0.211 0.011 -0.211 0.063 -0.375" fill="#ffffff" /><path d="M29.125 33.625h0.188a17.5 17.5 0 0 1 -0.438 1.313h-0.063c0.026 -0.25 0.066 -0.462 0.16 -0.696a1.15 1.15 0 0 0 0.09 -0.554z" fill="#ffffff" /><path d="M29.555 32.313c0.139 0.197 0.152 0.225 0.129 0.449 -0.059 0.238 -0.059 0.238 -0.183 0.363l0.047 -0.234c0.022 -0.191 0.026 -0.246 -0.07 -0.418 -0.234 -0.139 -0.459 -0.149 -0.727 -0.16V32.25c0.538 -0.123 0.538 -0.123 0.804 0.063" fill="#ffffff" /><path d="M40.25 22.688v0.063l-0.11 0.023c-0.421 0.087 -0.421 0.087 -0.828 0.227l-0.063 0.188 -0.25 -0.063q0.13 -0.108 0.262 -0.215l0.147 -0.121c0.286 -0.19 0.513 -0.171 0.841 -0.102" fill="#ffffff" /><path d="M25 45.5h0.125a1.92 1.92 0 0 1 -0.5 0.813c-0.159 0.059 -0.266 0.063 -0.438 0.063l-0.063 -0.125 0.14 0.019c0.183 -0.003 0.183 -0.003 0.31 -0.151l0.128 -0.172 0.13 -0.172c0.104 -0.141 0.104 -0.141 0.167 -0.274" fill="#ffffff" /><path d="m42 30.438 0.125 0.063a83 83 0 0 1 -0.523 0.347l-0.15 0.101 -0.144 0.095 -0.133 0.088 -0.112 0.056 -0.125 -0.063c0.244 -0.221 0.425 -0.352 0.75 -0.438v-0.125c0.148 -0.067 0.148 -0.067 0.313 -0.125" fill="#ffffff" /><path d="m26.063 43.875 0.125 0.063L25.5 45l-0.063 -0.188c0.056 -0.103 0.056 -0.103 0.141 -0.211a5 5 0 0 0 0.359 -0.539z" fill="#ffffff" /><path d="m26.313 19.063 0.024 0.121 0.039 0.129 0.125 0.063 -0.087 0.068c-0.139 0.167 -0.157 0.322 -0.198 0.533a6.5 6.5 0 0 1 -0.09 0.399l-0.125 0.063c0.04 -0.321 0.105 -0.623 0.192 -0.933l0.035 -0.13z" fill="#ffffff" /><path d="M34.625 29.375c0.043 0.109 0.043 0.109 0.063 0.25 -0.071 0.127 -0.071 0.127 -0.175 0.254l-0.103 0.127 -0.097 0.119 -0.125 0.188h-0.125c0.087 -0.243 0.201 -0.435 0.351 -0.644l0.119 -0.167z" fill="#ffffff" /><path d="m24.563 39.125 0.125 0.063c-0.091 0.239 -0.207 0.33 -0.438 0.438 -0.175 0.011 -0.175 0.011 -0.313 0L23.875 39.5l0.563 -0.063z" fill="#ffffff" /><path d="m19.5 26.5 -1 0.625v-0.188a4 4 0 0 1 0.395 -0.266l0.113 -0.071c0.281 -0.171 0.281 -0.171 0.493 -0.101" fill="#ffffff" /><path d="M45.813 26.125c0.527 0.283 0.527 0.283 0.688 0.5 0.047 0.234 0.047 0.234 0.063 0.438 -0.182 -0.159 -0.182 -0.159 -0.209 -0.307 -0.056 -0.176 -0.143 -0.224 -0.295 -0.326 -0.139 -0.095 -0.139 -0.095 -0.246 -0.179z" fill="#ffffff" /><path d="m34.438 16.688 0.063 0.125 -0.158 0.011 -0.206 0.016 -0.204 0.015c-0.186 0.013 -0.186 0.013 -0.37 0.083l-0.188 -0.125a30 30 0 0 1 0.355 -0.098l0.2 -0.055c0.197 -0.035 0.319 -0.035 0.507 0.028" fill="#ffffff" /><path d="M29.563 27.313h0.125c-0.117 0.429 -0.117 0.429 -0.188 0.5a9 9 0 0 0 0 0.375l-0.25 0.063c0.039 -0.229 0.103 -0.43 0.192 -0.644l0.069 -0.167z" fill="#ffffff" /><path d="M32.188 23h0.125c-0.041 0.254 -0.121 0.471 -0.223 0.707l-0.086 0.203 -0.066 0.153c-0.062 -0.194 -0.071 -0.232 0.019 -0.425l0.105 -0.2c0.049 -0.145 0.086 -0.289 0.125 -0.438" fill="#ffffff" /><path d="M25.875 20.688h0.063c0.017 0.426 -0.09 0.736 -0.25 1.125 -0.102 -0.254 -0.019 -0.45 0.059 -0.703l0.072 -0.239z" fill="#ffffff" /><path d="M21.938 30.375c0.24 0.036 0.409 0.103 0.614 0.234l0.149 0.093c0.112 0.111 0.112 0.111 0.129 0.279l-0.017 0.143 -0.121 -0.133c-0.192 -0.194 -0.413 -0.333 -0.642 -0.477l-0.112 -0.077z" fill="#ffffff" /><path d="m18.125 26.188 0.125 0.063 -0.105 0.085c-0.342 0.275 -0.342 0.275 -0.52 0.665 -0.043 -0.105 -0.043 -0.105 -0.063 -0.25 0.12 -0.283 0.302 -0.406 0.563 -0.563" fill="#ffffff" /><path d="M34.875 19.688c0.231 0.086 0.434 0.192 0.644 0.321l0.167 0.102 0.126 0.077 -0.125 0.125 -0.103 -0.066 -0.136 -0.086 -0.134 -0.086c-0.133 -0.083 -0.133 -0.083 -0.315 -0.137v-0.125h-0.125z" fill="#ffffff" /><path d="M30.375 42.75c0.297 0.054 0.297 0.054 0.438 0.125V43h0.313l0.063 0.25c-0.295 -0.102 -0.559 -0.257 -0.813 -0.438z" fill="#ffffff" /><path d="M27.438 35.938H27.5c0.049 0.382 -0.118 0.625 -0.313 0.938 -0.083 -0.249 -0.015 -0.338 0.09 -0.574l0.089 -0.206z" fill="#ffffff" /><path d="m39.375 24 -0.336 0.223 -0.189 0.125 -0.163 0.089 -0.125 -0.063c0.078 -0.125 0.078 -0.125 0.188 -0.25h0.25v-0.125c0.188 -0.063 0.188 -0.063 0.375 0" fill="#ffffff" /><path d="m23.25 23 0.125 0.063 -0.063 0.25 -0.137 -0.011c-0.209 0.014 -0.313 0.09 -0.488 0.199l-0.125 -0.063 0.336 -0.223 0.189 -0.125z" fill="#ffffff" /><path d="M33.313 20.25h0.125c-0.192 0.66 -0.192 0.66 -0.313 0.938 -0.086 -0.238 -0.043 -0.442 0 -0.688l0.188 -0.063z" fill="#ffffff" /><path d="m36.563 23.875 0.125 0.125 -0.367 0.25 -0.206 0.141c-0.176 0.109 -0.176 0.109 -0.301 0.109 0.064 -0.174 0.1 -0.237 0.27 -0.321l0.168 -0.054 0.176 -0.07 0.137 -0.055z" fill="#ffffff" /><path d="M32.938 19.063H33c0.025 0.284 -0.056 0.458 -0.188 0.707l-0.105 0.203 -0.082 0.153c-0.085 -0.256 0.015 -0.405 0.121 -0.636l0.055 -0.124z" fill="#ffffff" /><path d="M26.875 20.375c0.078 0.222 0.045 0.357 -0.028 0.578l-0.054 0.169 -0.043 0.128h-0.063a14 14 0 0 1 -0.011 -0.297l-0.006 -0.167c0.021 -0.189 0.081 -0.271 0.206 -0.411" fill="#ffffff" /><path d="m36.063 40.188 0.125 0.063 -0.427 0.336c-0.136 0.102 -0.136 0.102 -0.261 0.165l-0.125 -0.125 0.336 -0.223 0.189 -0.125z" fill="#ffffff" /><path d="M17.313 35h0.125v0.125l0.188 0.063a16.5 16.5 0 0 1 0.188 0.313l0.188 0.125 -0.063 0.125c-0.298 -0.224 -0.456 -0.418 -0.625 -0.75" fill="#ffffff" /><path d="M37.063 23.5h0.375c-0.528 0.438 -0.528 0.438 -0.75 0.438l0.063 -0.188 0.25 -0.063z" fill="#ffffff" /><path d="M32.75 34.688c0.311 0.111 0.59 0.275 0.875 0.438 -0.188 0.063 -0.188 0.063 -0.308 0.018l-0.129 -0.069 -0.129 -0.068a5 5 0 0 1 -0.308 -0.194z" fill="#ffffff" /><path d="M41.625 29.75v0.125l-0.179 0.043c-0.207 0.063 -0.207 0.063 -0.281 0.246l-0.039 0.148 -0.063 -0.125 -0.125 -0.063 0.274 -0.188 0.153 -0.105c0.136 -0.082 0.136 -0.082 0.261 -0.082" fill="#ffffff" /><path d="M34.438 26.063c-0.063 0.167 -0.097 0.236 -0.261 0.316l-0.154 0.044 -0.155 0.046 -0.118 0.032c0.42 -0.438 0.42 -0.438 0.688 -0.438" fill="#ffffff" /><path d="M32.125 21c0.125 0.188 0.125 0.188 0.125 0.375l-0.125 0.063a5 5 0 0 0 -0.125 0.313h-0.125z" fill="#ffffff" /><path d="M23.438 38.188a4.5 4.5 0 0 1 0.511 0.231l0.176 0.082 0.125 -0.063 -0.063 0.25 -0.304 -0.144 -0.172 -0.082c-0.149 -0.086 -0.149 -0.086 -0.274 -0.274" fill="#ffffff" /><path d="M21.375 37.813c0.227 0.108 0.429 0.217 0.625 0.375l-0.063 0.125 -0.625 -0.375z" fill="#ffffff" /><path d="M19.313 28.688c0.253 0.076 0.472 0.159 0.688 0.313l0.063 0.188c-0.285 -0.095 -0.52 -0.247 -0.75 -0.438z" fill="#ffffff" /><path d="M42.313 25c0.129 -0.024 0.129 -0.024 0.313 0 0.159 0.112 0.298 0.24 0.438 0.375l-0.125 0.063c-0.149 -0.073 -0.149 -0.073 -0.321 -0.179l-0.172 -0.105 -0.133 -0.09z" fill="#ffffff" /><path d="M26.375 22.188c0.075 0.227 0.039 0.317 -0.028 0.543l-0.054 0.188 -0.043 0.144h-0.063V22.375h0.125z" fill="#ffffff" /><path d="M27.688 41.375h0.125c-0.09 0.257 -0.22 0.465 -0.375 0.688l-0.125 -0.188q0.089 -0.126 0.179 -0.25l0.101 -0.141z" fill="#ffffff" /><path d="M36.313 37.813c0.281 0.033 0.464 0.141 0.688 0.313v0.125c-0.257 -0.09 -0.467 -0.216 -0.688 -0.375z" fill="#ffffff" /><path d="M45.938 34.563H46c0.028 0.137 0.028 0.137 0 0.313 -0.134 0.124 -0.281 0.219 -0.438 0.313l-0.125 -0.063 0.179 -0.141c0.153 -0.127 0.25 -0.232 0.321 -0.422" fill="#ffffff" /><path d="M40.375 30.438 40.5 30.5a18 18 0 0 1 -0.266 0.223l-0.149 0.125c-0.147 0.089 -0.147 0.089 -0.291 0.072l-0.106 -0.044 0.336 -0.223 0.189 -0.125z" fill="#ffffff" /><path d="m34.5 16.813 0.188 0.125c-0.047 0.484 -0.047 0.484 -0.188 0.625z" fill="#ffffff" /><path d="M18.375 36c0.258 0.038 0.459 0.128 0.688 0.25l-0.063 0.125c-0.249 -0.086 -0.425 -0.203 -0.625 -0.375" fill="#ffffff" /><path d="M24.813 33.188c-0.063 0.125 -0.063 0.125 -0.169 0.169 -0.359 0.093 -0.359 0.093 -0.549 0.026l-0.093 -0.07c0.527 -0.143 0.527 -0.143 0.813 -0.125" fill="#ffffff" /><path d="m36.375 24.75 0.125 0.063 -0.274 0.219 -0.153 0.123c-0.136 0.096 -0.136 0.096 -0.261 0.096 0.072 -0.217 0.119 -0.243 0.308 -0.359l0.135 -0.085z" fill="#ffffff" /><path d="M24.125 22.75q-0.135 0.066 -0.27 0.129l-0.151 0.072c-0.141 0.049 -0.141 0.049 -0.329 -0.014a13 13 0 0 1 0.234 -0.129l0.132 -0.072c0.157 -0.057 0.23 -0.042 0.384 0.014" fill="#ffffff" /><path d="m34.063 25.438 0.125 0.125 -0.242 0.16 -0.137 0.09 -0.121 0.063 -0.125 -0.063 0.25 -0.125v-0.125z" fill="#ffffff" /><path d="M24.75 43.313h0.063c0.013 0.264 -0.013 0.448 -0.125 0.688h-0.125z" fill="#ffffff" /><path d="M24.875 39.313h0.313L25.25 39.5c0.126 0.046 0.126 0.046 0.25 0.063v0.125c-0.249 -0.086 -0.425 -0.203 -0.625 -0.375" fill="#ffffff" /><path d="m43.063 29.75 0.125 0.063 -0.563 0.375 -0.063 -0.125h0.125v-0.125a6.5 6.5 0 0 1 0.375 -0.188" fill="#ffffff" /><path d="M33 42.188c-0.043 0.121 -0.043 0.121 -0.125 0.25 -0.164 0.047 -0.164 0.047 -0.313 0.063L32.5 42.25l0.063 0.125 0.148 -0.093c0.165 -0.094 0.165 -0.094 0.289 -0.094" fill="#ffffff" /><path d="m20.563 36.313 0.5 0.313 -0.188 0.125 -0.063 -0.188c-0.126 -0.046 -0.126 -0.046 -0.25 -0.063z" fill="#ffffff" /><path d="M31.375 35.625h0.188c-0.035 0.204 -0.093 0.301 -0.25 0.438a9 9 0 0 1 0 -0.375z" fill="#ffffff" /><path d="m20.125 25.875 0.125 0.125 -0.211 0.157 -0.118 0.088c-0.108 0.069 -0.108 0.069 -0.233 0.069v-0.125c0.16 -0.143 0.217 -0.188 0.438 -0.188z" fill="#ffffff" /><path d="m35.125 25 -0.242 0.157 -0.137 0.088c-0.121 0.069 -0.121 0.069 -0.246 0.069 0.063 -0.188 0.063 -0.188 0.207 -0.297 0.188 -0.087 0.229 -0.075 0.418 -0.015" fill="#ffffff" /><path d="M31.813 21.75c0.051 0.207 0.069 0.353 0.063 0.563l-0.25 0.063z" fill="#ffffff" /><path d="m34.813 20.563 0.438 0.188 -0.063 0.188 -0.438 -0.25z" fill="#ffffff" /><path d="M43.438 36.375v0.188l-0.188 0.063 -0.063 0.125 -0.188 -0.125z" fill="#ffffff" /><path d="m19.75 27.938 0.563 0.313c-0.188 0.063 -0.188 0.063 -0.351 -0.015 -0.148 -0.11 -0.148 -0.11 -0.211 -0.297" fill="#ffffff" /><path d="m36.563 25.625 0.125 0.063 -0.211 0.157 -0.118 0.088c-0.108 0.069 -0.108 0.069 -0.233 0.069 0.063 -0.188 0.063 -0.188 0.246 -0.297z" fill="#ffffff" /><path d="m36.375 25.938 0.063 0.25Z" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="m37.813 38.875 0.125 0.063 -0.125 0.063z" fill="#ffffff" /><path d="m35.938 26.188 0.188 0.063Z" fill="#ffffff" /><path d="m32 43.313 0.125 0.063Z" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="m25.313 38.438 0.125 0.063Z" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /><path d="" fill="#ffffff" /></svg>
     
      Deploy now
    </Button>
  );
}

