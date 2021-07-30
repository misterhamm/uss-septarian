<template>
<div>
  <v-card class="nav">
      <v-navigation-drawer
        permanent
        dark
        fixed
        bottom
      >
      
              <v-img src="../assets/sept.png"></v-img>
           

        <v-list
          nav
          dense
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
</template>
<script>


export default {
    name: 'Nav',
    data: () => ({
        msg: 'USS Septarian',
        drawer: false,
        group: null
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>

<style lang="scss" scoped>
.v-card > *:last-child:not(.v-btn):not(.v-chip) {
    border-radius: 0;
    padding-top: 10px;
}
.mdi:before {
    font-weight: 100;
}
</style>