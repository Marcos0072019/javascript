 class BrowserHistory {
            constructor() {
                this.historyStack = [];
            }

            visitPage(page) {
                if (page.trim() === "") {
                    alert("Por favor, insira um nome de página válido!");
                    return;
                }
                this.historyStack.push(page);
                this.updateDisplay();
            }

            goBack() {
                if (this.historyStack.length === 0) {
                    alert("Nenhuma página para voltar!");
                    return;
                }
                this.historyStack.pop();
                this.updateDisplay();
            }

            updateDisplay() {
                const currentPageDiv = document.getElementById("currentPage");
                const historyDiv = document.getElementById("history");

                currentPageDiv.textContent = this.historyStack.length === 0 
                    ? "Página atual: Nenhuma" 
                    : `Página atual: ${this.historyStack[this.historyStack.length - 1]}`;


                historyDiv.textContent = `Histórico: [${this.historyStack.join(", ")}]`;
            }
        }
        const browser = new BrowserHistory();
 function visitPage() {
            const pageInput = document.getElementById("pageInput");
            const page = pageInput.value;
            browser.visitPage(page);
            pageInput.value = "";
        }

        function goBack() {
            browser.goBack();
        }