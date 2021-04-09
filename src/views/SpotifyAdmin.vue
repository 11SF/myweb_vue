<template>
  <v-app>
    <v-navigation-drawer app color="teal" dark>
      <v-list>
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{
              $store.getters.getUserData.sub
            }}</v-list-item-title>
            <v-list-item-subtitle
              >Role :
              {{ $store.getters.getUserData.userLevel }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link @click="menuSelect = '1'">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จัดการข้อมูลสมาชิก</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect = '2'">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>จัดการข้อมูลส่วนตัวสมาชิก</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="menuSelect = '3'">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>เพิ่ม/ลบ สมาชิก</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="goMembersView">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>หน้า members</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <Manage v-if="menuSelect == '1'" />
    <Addmember v-if="menuSelect == '3'" />
    <EditMember v-if="menuSelect == '2'"/>  
  </v-app>
</template>

<script>
import axios from "axios";
import Manage from "../components/manage"
import Addmember from "../components/Addmember"
import EditMember from '../components/editMember'
// import Navbar from '../components/Navbar2.vue'
export default {
  components: {
    // Navbar,
    Manage,
    Addmember,
    EditMember
  },
  data() {
    return {
      membersData: this.$store.getters.getMembersData,
      dialog: false,
      isAgree: false,
      menuSelect : '1'
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push({name : 'SpotifyMember'})
    },
    pushCount(member) {
      member.countMonth += 1;
      let a = member.expireDate.split("/");
      let int = parseInt(a[1]) + 1;
      if (int > 12) {
        int = 1;
        let year = parseInt(a[2]) + 1;
        member.expireDate = `${a[0]}/${int}/${year}`;
        return;
      }
      member.expireDate = `${a[0]}/${int}/${a[2]}`;
    },
    deCount(member) {
      member.countMonth -= 1;
      let a = member.expireDate.split("/");
      let int = parseInt(a[1]) - 1;
      member.expireDate = `${a[0]}/${int}/${a[2]}`;
    },
    convertDate(member) {
      return member;
    },
    goAddmember() {
      this.$router.push({
        path: "/spotify/admin/addmember",
      });
    },
    async updateData(member) {
      let res = await axios.put(
        "https://mysitebackend.herokuapp.com/api/admin/edit/",
        {
          headers : {
            'Authorization': `Bearer ${localStorage.getItem('userKey')}`
          },
          query : {
            'id' : member._id
          }
        },
        member
      );
      this.updateStatus(res);
    },
    updateStatus(res) {
      if (res.data.status === true) return true;
      else return false;
    },
    goMembersView() {
      this.$router.push({
        path: "/spotify/members",
      });
    }
  },
  created() {
      this.$store.dispatch('fetchMembersData')
      if (this.$store.getters.getLoginStatus == 'notLogin') {
        this.$router.push({
          name : "Login"
        })
      }
  },
  computed:{
        pageSelect() {
            return this.menuSelect
        }
  },
  watch: {
        pageSelect(oldState,newStatus) {
          if(newStatus != oldState)
            this.$store.dispatch('fetchMembersData')
        }
    }
};
</script>

<style scoped>
header {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.container {
  width: 960px;
}
tbody tr {
  height: 200px;
}
tbody tr td {
  font-size: 18px !important;
}
.table-header-text {
  font-size: 18px !important;
}
.test {
  background-color: red;
}
</style>