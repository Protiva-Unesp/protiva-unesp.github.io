import './src/styles/global.css';
import "prismjs/themes/prism-tomorrow.css";

export const onRouteUpdate = () => {
    document.querySelectorAll("pre").forEach((pre) => {
        if (pre.querySelector(".copy-button")) return; // Evita botões duplicados

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

            // Criar um contêiner para o botão e código
            const wrapper = document.createElement("div");
            wrapper.className = "preWrapper";
            pre.parentNode.insertBefore(wrapper, pre); // Substitui o pre com um wrapper
            wrapper.appendChild(pre);

            // Adicionar o botão antes do <pre>
            wrapper.insertBefore(button, pre);
    });
};
