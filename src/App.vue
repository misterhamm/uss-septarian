<template>
  <v-app :dark="$vuetify.theme.dark = true">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div class="gradient"></div>
    <div>
      <div>
        <v-card class="nav">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" fixed></v-app-bar-nav-icon>
            <v-navigation-drawer
              temporary
              dark
              fixed
              v-model="drawer"
            >
                    <v-img src="./assets/logo.png"></v-img>
              <v-list
                nav
                
              >
                <v-list-item link>
                  <v-list-item-icon>
                    <i class="fas fa-rocket"></i>
                  </v-list-item-icon>
                  <v-list-item-title>About the ship, recruitment, contact</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-icon>
                    <i class="fas fa-hand-spock"></i>
                  </v-list-item-icon>
                  <v-list-item-title>History</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-icon>
                    <i class="fas fa-user-astronaut"></i>
                  </v-list-item-icon>
                  <v-list-item-title>Crew</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-card>
      </div>
      <div class="hero">
        <v-container>
            <h1>{{ hero.title.value }}</h1>
            <h2 style="position: relative;">
          test!!!
          <a href="https://www.twitter.com/intent/tweet?url=https://www.bizstream.com&text=My%20Title+%7C+Bridgespan">social link test</a>
        </h2>
        </v-container>
      </div>
    </div>
    <v-main>
      <v-container>
        <div>Here is a section where we'll write about us content. Summary of what the Septarian is and what we do</div>
      </v-container>

      <ul>
        <li v-for="(member, index) in crew" :key="index">
          <img :src="member.photo.value[0].url" alt="">
          <h2>{{member.name.value}}</h2>
          <p>{{member.rank.value}}</p>
        </li>
      </ul>
      <ul>
        <li v-for="(event, index) in events" :key="index">
          <img :src="event.main_image.value[0].url" alt="">
          <h2>{{event.name.value}}</h2>
          <p>Start Date: {{event.start_date.value}}</p>
          <p>End Date: {{event.end_date.value}}</p>
          <p>{{event.link.value}}</p>
          <div v-html="event.short_description.value"></div>
        </li>
      </ul>
    </v-main>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    articles: [],
    hero: {
      title: ''
    },
    events: [],
    crew: [],
    facts: [],
    drawer: false
  }),
  mounted() {
    this.getEvents();
    this.getHero();
    this.getCrew();
  },
  methods: {
    getContentItems(items) {
      return items;
    },
    getEvents() {
      const KontentDelivery = require('@kentico/kontent-delivery');
      const deliveryClient = new KontentDelivery.DeliveryClient({
        projectId: '1f1f4265-7223-0092-ffae-6eb20679c9cb'
      });
      deliveryClient
      .itemsFeedAll()
      .type('event')
      .toPromise()
      .then(response => {
        this.events = this.getContentItems(response.items);
      });
    },
    getHero() {
      const KontentDelivery = require('@kentico/kontent-delivery');
      const deliveryClient = new KontentDelivery.DeliveryClient({
        projectId: '1f1f4265-7223-0092-ffae-6eb20679c9cb'
      });
      deliveryClient
      .itemsFeedAll()
      .type('hero')
      .toPromise()
      .then(response => {
        this.hero = this.getContentItems(response.items[0]);
      });
    },
    getCrew() {
      const KontentDelivery = require('@kentico/kontent-delivery');
      const deliveryClient = new KontentDelivery.DeliveryClient({
        projectId: '1f1f4265-7223-0092-ffae-6eb20679c9cb'
      });
      deliveryClient
      .itemsFeedAll()
      .type('crew')
      .orderParameter('elements.display_order', KontentDelivery.SortOrder.desc)
      .toPromise()
      .then(response => {
        console.log(response);
        this.crew = this.getContentItems(response.items);
      });
    },
  }
};
</script>

<style>

</style>