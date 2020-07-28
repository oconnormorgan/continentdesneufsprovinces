import Axios from "axios";

export default {
    data: () => ({
        police: 10,
        texte: [],
    }),
    created() {
        this.getChapitre();
    },
    methods: {
        getChapitre() {
            Axios.get('/api/' + this.$route.params.id + '/texte').then(
              ({ data }) => {
                  this.texte = data[0].texte
                  console.log(data)
              }
            )
          }
    }
}