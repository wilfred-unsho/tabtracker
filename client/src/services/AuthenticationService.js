import APi from "@/services/APi"

export default {
  register(credentials) {
    return APi().post("register", credentials)
  }
}
