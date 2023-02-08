export const copy = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.style.height = "0";
    document.body.appendChild(textarea);
    textarea.value = text;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}
