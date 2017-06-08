Vue.component('tabs', {
  template: `
    <div>
      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{ 'is-active': tab.isActived }">
            <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
          </li>
        </ul>
      </div>

      <div class="tab-details">
        <slot></slot>
      </div>
    </div>
  `,

  data() {
    return {
      tabs: []
    }
  },

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab: function(tab) {
      this.tabs.forEach(function(c) {
        c.isActived = (c.name === tab.name);
      })
    }
  }
})

Vue.component('tab', {
  template: `
    <div v-show="isActived"><slot></slot></div>
  `,

  props: {
    name: {required: true},
    selected: {default: false}
  },

  data() {
    return {isActived: false}
  },

  mounted() {
    this.isActived = this.selected;
  },

  computed() {
    return {
      href: `#{this.name.toLowerCase().replace(/\s*/g, '')}`
    }
  }

});

new Vue({
  el: '#root'
});
