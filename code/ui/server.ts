class ServerPanel {
	panel: Record<string, any>;
	connection: any;
	constructor(panel: any) {
		this.panel = panel;
		this.panel.content_obj.classList.add("center");
		this.panel.header_obj.classList.add("center");
		this.connection = panel.manager.client.connection;
		this.message_handler = this.message_handler.bind(this);
		this.connection.addEventListener("message", this.message_handler);
	}

	message_handler(e: Record<string, any>) {
		const obj = JSON.parse(e.data);

		let div = document.createElement("div");
		div.classList.add("vertical-margins");
		const button = document.createElement("div");
		button.classList.add("button");
		button.textContent = "Local";
		button.addEventListener("click", () => {
			this.connection.send(JSON.stringify({server: "localhost"}));
			this.server_finish();
		});
		div.appendChild(button);
		this.panel.content_obj.appendChild(div);

		div = document.createElement("div");
		div.classList.add("vertical-margins");
		const button1 = document.createElement("div");
		button1.classList.add("button");
		button1.textContent = "civ13.com";
		button1.addEventListener("click", () => {
			this.connection.send(JSON.stringify({server: "civ13.com"}));
			this.server_finish();
		});
		div.appendChild(button);
		this.panel.content_obj.appendChild(div);
	}

	server_finish() {
		this.connection.removeEventListener("message", this.message_handler);
		this.panel.manager.client.server_finish();
		this.panel.close();
	}
}

module.exports.panel_classes = {ServerPanel};
