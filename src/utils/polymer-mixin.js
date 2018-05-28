const PolymerMixinElement = function(superClass) {
	if(superClass){
		return class extends superClass {
            connectedCallback() {
                if (super.connectedCallback) {
                    super.connectedCallback();
                }
			}
			
			ready(){
				if(super.ready){
					super.ready();
				}
			}
		}
	} else {
		return class {
            constructor(){}
			ready(){}
			connectedCallback() {}
		}
	}    
}