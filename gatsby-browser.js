import './src/styles/global.css';
import "prismjs/themes/prism-tomorrow.css";

export const onRouteUpdate = () => {
    document.querySelectorAll("pre").forEach((pre) => {
        if (pre.querySelector(".copy-button")) return; 

            const button = document.createElement("button");
            button.className = "copyButton";
            button.innerText = "Copiar";

            button.addEventListener("click", () => {
                const code = pre.querySelector("code");
                if (!code) return;

                navigator.clipboard.writeText(code.innerText).then(() => {
                    button.innerText = "Copiado!";
                    setTimeout(() => (button.innerText = "Copiar"), 1000);
                });
            });

            const wrapper = document.createElement("div");
            wrapper.className = "preWrapper";
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);

            wrapper.insertBefore(button, pre);
    });
};
