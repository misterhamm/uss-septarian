<template>
  <v-app :dark="$vuetify.theme.dark = true">
    

    <!-- Navigation -->
    <nav class="nav">
      <v-card >
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
              <v-list-item>
                <v-list-item-icon>
                  <i class="fas fa-rocket"></i>
                </v-list-item-icon>
                <v-list-item-title><a href="#about">Who we are</a></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <i class="fas fa-user-astronaut"></i>
                </v-list-item-icon>
                <v-list-item-title>
                  <a href="#crew">
                    Crew
                  </a>
                </v-list-item-title>
              </v-list-item>
              <v-list-item >
                <v-list-item-icon>
                  <i class="fas fa-calendar-alt"></i>
                </v-list-item-icon>
                <v-list-item-title>
                  <a href="#events">
                    Events
                  </a>
                </v-list-item-title>
              </v-list-item>
              <v-list-item >
                <v-list-item-icon>
                  <i class="fas fa-camera"></i>
                </v-list-item-icon>
                <v-list-item-title>
                  <a href="#gallery">
                    Gallery
                  </a>
                </v-list-item-title>
              </v-list-item>
              <v-list-item >
                <v-list-item-icon>
                  <i class="fas fa-hand-spock"></i>
                </v-list-item-icon>
                <v-list-item-title>
                  <a href="#events">
                    About the Septarian
                  </a>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
    </nav>

    <!-- Hero -->
    <div class="hero">
      <v-container>
          <h1>{{ hero.title.value }}</h1>
          <!-- <div class="subtitle" v-html="hero.description.value"></div> -->
      </v-container>
    </div>


    <v-main>

      <!-- About -->
      <v-container id="about">
        <div v-html="about"></div>
      </v-container>

      <!-- Meet the Crew -->
      <v-container id="crew">
        <h2>Meet The Crew</h2>
        <ul class="crew list-reset row">
          <li class="col-sm-6 col-md-4 col-lg-3" v-for="(member, index) in crew" :key="index">
            <v-card light>
              <v-img :src="member.photo.value[0].url"></v-img>
              <v-card-title>{{member.name.value}}</v-card-title>
              <v-card-subtitle>{{member.rank.value}}</v-card-subtitle>
            </v-card>
          </li>
        </ul>
      </v-container>
      
      <!-- Events -->
      <v-container id="events">
        <h2>Upcoming Events</h2>
        <ul class="list-reset row">
          <li class="col-sm-6 col-md-4 col-lg-3" v-for="(event, index) in events" :key="index">
            <v-card light :href="event.link.value">
              <v-img :src="event.main_image.value[0].url" alt="">
                <v-chip class="card-tag" color="secondary">{{ event.start_date.rawData.value | moment("M.D.YYYY")}}</v-chip>

              </v-img>
              <v-card-title>{{event.name.value}}</v-card-title>
              <v-card-text>
                <div v-html="event.short_description.value"></div>
              </v-card-text>
            </v-card>
          </li>
        </ul>
      </v-container>

      <v-container>
        <h2>Image Gallery</h2>
        <div class="gallery">
          <v-dialog v-for="(image, index) in gallery" :key="index">
            <template  v-slot:activator="{ on, attrs }">
              <img v-bind="attrs" v-on="on" :src="image.src">
            </template>
              <template v-slot:default="dialog">
              <v-card>
                <v-img :src="image.src"></v-img>
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
          </v-dialog>
        </div>
      </v-container>
    </v-main>
    <!-- star background -->
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <div class="gradient"></div>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  data: () => ({
    articles: [],
    about: '',
    hero: {
      title: ''
    },
    events: [],
    crew: [],
    facts: [],
    galleryImages: [],
    gallery: [],
    drawer: false,
    showNav: true
  }),
  mounted() {
    this.getEvents();
    this.getHero();
    this.getAbout();
    this.getCrew();
    this.getGallery();
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
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
        getAbout() {
      const KontentDelivery = require('@kentico/kontent-delivery');
      const deliveryClient = new KontentDelivery.DeliveryClient({
        projectId: '1f1f4265-7223-0092-ffae-6eb20679c9cb'
      });
      deliveryClient
      .itemsFeedAll()
      .type('about')
      .toPromise()
      .then(response => {
        this.about = this.getContentItems(response.items[0].description.value);
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
        this.crew = this.getContentItems(response.items);
      });
    },
    getGallery() {
      const KontentDelivery = require('@kentico/kontent-delivery');
      const deliveryClient = new KontentDelivery.DeliveryClient({
        projectId: '1f1f4265-7223-0092-ffae-6eb20679c9cb'
      });
      deliveryClient
      .itemsFeedAll()
      .type('gallery')
      .toPromise()
      .then(response => {
        this.galleryImages = this.getContentItems(response.items[0].images.value);
        this.galleryImages.forEach((image) => {
          this.gallery.push({
            src: image.url,
            thumb: image.url
          })
        })
      });
    }
  }
};
</script>

<style>

</style>