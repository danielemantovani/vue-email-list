const { createApp } = Vue;

createApp({
    data() {
        return {
            emailArray: [],
        }
    },
    created() {
        this.genRandomEmail();
    },
    methods: {
        genRandomEmail() {
            for (i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                        console.log(resp.data.response);
                        this.emailArray.push(resp.data.response)
                    })
            }
        }
    }

}).mount("#app");

