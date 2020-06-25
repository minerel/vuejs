<template>
  <div class="container">
    <div class="row mt-5">
      <div
        class="col-md-4 offset-md-4 card card-info p-3 border"
        :class="{'border-secondary' : isUser, 'border-info' : !isUser }"
      >
        <h3
          :class="{'text-secondary' : isUser, 'text-info' : !isUser }"
          class="text-center mb-3 mt-3"
        >{{ isUser ? $t('auth.signIn') : $t('auth.signUp') }}</h3>
        <hr />
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label>{{$t('auth.email')}}</label>
            <input
              v-model="user.email"
              type="email"
              class="form-control"
              v-bind:placeholder="$t('auth.emailPLace')"
              required
            />
          </div>
          <div class="form-group">
            <label>{{$t('auth.password')}}</label>
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              v-bind:placeholder="$t('auth.passwordPLace')"
              required
            />
          </div>
          <div class="button-container d-flex flex-column align-items-center">
            <button
              type="submit"
              :class="{'btn-secondary' : isUser, 'btn-info' : !isUser }"
              class="btn btn-block mb-2"
            >{{ isUser ? $t('auth.signIn') : $t('auth.signUp') }}</button>
            <a
              href="#"
              @click.prevent="isUser=!isUser"
              class="text-secondary"
            >{{ isUser ? $t('auth.notMembership') : $t('auth.membership')}}</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: null,
        password: null
      },
      isUser: false
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("login", { ...this.user, isUser: this.isUser })
        .then(response => {
          this.$router.push("/", response);
        });
    }
  }
};
</script>
