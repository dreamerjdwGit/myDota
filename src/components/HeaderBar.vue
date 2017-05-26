<template>
  <nav class="navbar navbar-inverse navbar-fixed-top header-bar">
    <user-info></user-info>
    <ul class="nav navbar-nav" >
      <li :class="summaryState" @click="changeMainView(1)">
        <router-link :to="{ name: 'SummaryView' }">
          综合统计
        </router-link>
      </li>
      <li :class="recentState" @click="changeMainView(2)">
        <router-link :to="{ name: 'RecentView' }">
          近期表现
        </router-link>
      </li>
      <li :class="recordState" @click="changeMainView(3)">
        <router-link :to="{ name: 'RecondView' }">
          最高纪录
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import UserInfo from '../components/UserInfo'
export default {
  name: 'header-bar',
  components: { UserInfo },
  data () {
    return {
      isSummary: true,
      isRecent: false,
      isRecord: false
    }
  },
  computed: {
    summaryState: function () {
      return {
        activing: this.isSummary
      }
    },
    recentState: function () {
      return {
        activing: this.isRecent
      }
    },
    recordState: function () {
      return {
        activing: this.isRecord
      }
    }
  },
  methods: {
    changeMainView: function(num) {
      if(num === 1) {
        this.isSummary = true;
        this.isRecord = false;
        this.isRecent = false;
      } else if(num === 2) {
        this.isSummary = false;
        this.isRecord = false;
        this.isRecent = true;
      } else if(num === 3) {
        this.isSummary = false;
        this.isRecord = true;
        this.isRecent = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    margin: 0;
    display: flex;
    width: 100%;
    height: 3.5rem;
    text-align: center;
  }
  li {
    flex: 1;
  }
  li.activing:after{
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    left: 48%;
    border-left: 0.6rem solid transparent;
    border-right: 0.6rem solid transparent;
    border-bottom: 0.8rem solid #fff;
    margin: 0 auto;
  }
  li.activing a{
    color: #fff !important;
  }
</style>
