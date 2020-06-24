<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow mb-5 p-3">
    <a class="navbar-brand" href="#">{{$t('name')}}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto" :class="logoutClass">
        <router-link class="nav-item" tag="li" :to="`/${$i18n.locale}`">
          <a class="nav-link text-white" href="#">{{$t('nav.home')}}</a>
        </router-link>
      </ul>
      <!--Language -->
      <div class="dropdown">
        <button
          class="btn dropdown-toggle p-2"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="ml-2 text-white">{{$t('nav.lang')}}</span>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#" @click.prevent="setLocale('en')">
            <img src="@/assets/flag_en.png" class="mr-2" />
            {{$t('nav.eng')}}
          </a>
          <a class="dropdown-item" href="#" @click.prevent="setLocale('tr')">
            <img src="@/assets/flag_tr.png" class="mr-2" />
            {{$t('nav.tr')}}
          </a>
        </div>
      </div>
      <!--Log Out -->
      <ul class="navbar-nav my-2 my-lg-0" :class="logoutClass">
        <li class="nav-item">
          <a @click.prevent="logout" class="nav-link text-white" href="#">{{$t('nav.out')}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale }
      });
    }
  },
  computed: {
    logoutClass() {
      return {
        "d-none": !this.$store.getters.isAuthenticated
      };
    }
  }
};
</script>
