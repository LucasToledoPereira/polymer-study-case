## Dgt Select
This component implements a HTML Select and Options using Polymer Webcomponents

### Attributes
#### Items
It is the list of options to be present at the select. Each item must contain name and value properties

### Usage
You can use this component like the flowing code:

```html
<custom-select items='[{"name": "Arroz", "value": 999}]'>
</custom-select>

//------------------------ OR ------------------------------------


<dom-module id="my-element">
    <template>
        <custom-select items='[[items]]'></custom-select>
    </template>
</dom-module>
  

<script>
class MyElement extends Polymer.Element {
    static get is() { return 'my-element'; }

    static get properties() {
        return {
        items: {
            type: Array,
            value() {
            return [{"name": "Arroz", "value": 999}]
            }
        }
        }
    }

    constructor() {
        super();
    }
}

customElements.define(SelectDemo.is, SelectDemo);
</script>

```

## Authors
* Supero TI - **Lucas Toledo Pereira** - [Github - LucasToledoPereira](https://github.com/LucasToledoPereira)