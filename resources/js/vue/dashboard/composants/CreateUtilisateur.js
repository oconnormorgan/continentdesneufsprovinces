import { authenticationService } from "../../../_services/authentication.service";

export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            pseudoRules: [v => !!v || "Nom d'utilisateur requis"],
            emailRules: [
                v => !!v || "E-mail requis",
                v => /.+@.+\..+/.test(v) || "Ce champ doit être un email"
            ],
            pwdRules: [v => !!v || "Mot de passe requis"],
            lazy: false,
            valid: true,
            loading: false,
            dialog: false,
            returnUrl: "",
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            id_role: '',
            isAdmin: false,
            user: {
                email: '',
                password: ''
            },
        };
    },
    methods: {
        save() {
            if (this.password == this.passwordConfirm) {
                if (this.isAdmin == true) {
                    this.id_role = 1,
                    axios.post('/api/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        id_role: this.id_role
                    })
                } else {
                    axios.post('/api/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        id_role: 2
                    })
                }

            } else {
                console.log("erreur")
            }

        },
        close() {
            this.dialog = false
        }
    }
};