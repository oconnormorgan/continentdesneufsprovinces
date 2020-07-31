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
            returnUrl: "",
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            id_role: '',
            user: {
                email: '',
                password: ''
            },
        };
    },
    created() {
        if (authenticationService.currentUserValue) {
            return this.$router.push('/');
        }
        this.returnUrl = this.$route.query.returnUrl || "/";
    },
    methods: {
        save() {
            if (this.password == this.passwordConfirm) {
                axios.post('/api/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    id_role: 2
                }).then(
                    this.user.email = this.email,
                    this.user.password = this.password,
                    console.log(this.user),
                    authenticationService.login(this.user).then(
                        user => {
                            this.$router.push(this.returnUrl);
                        },
                        error => {
                            this.loading = false;
                        }
                    )
                )
                    .catch();

            } else {
                console.log("erreur")
            }

        },
    }
};