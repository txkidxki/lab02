app.component('product-details',{
    props: {
        detail: {
            type: Boolean,
            required: true
        }
    },

    template:
    /*html*/
    `<div class="product-display">
        <div class="product-info">
            <p> Details: {{size}} </p>
    </div> 
</div>`,
    data() {
        return {
            detail: true
        }
    },

    computed: {
        size() {
            if (this.detail){
                return 'size = 38'
            }
            return 'size = --'
        }

    }

})