

export class ZiaUrlbarParent extends JSWindowActorParent {
  receiveMessage(message) {
    const browser = this.browsingContext?.top?.embedderElement;
    const win = browser?.ownerGlobal;
    if (message.name === "ZiaUrlbar:Scrolled") {
      win?.ziaUrlbarOnPageScroll?.(browser, message.data);
    } else if (message.name === "ZiaUrlbar:Painted") {
      win?.ziaUrlbarOnPagePainted?.(browser);
    }
  }
}
