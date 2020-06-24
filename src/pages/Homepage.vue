<template>
  <div>
    <b-container class="my-5">
      <b-row>
        <b-col>
          <h2 class="text-secondary text-center">{{$t('home.task')}}</h2>
        </b-col>
      </b-row>
      <!--Tasks-->
      <b-row>
        <b-col v-for="task in tasks " :key="task.id" md="4">
          <b-card
            :title="task.name"
            :img-src="require(`@/assets/img${task.id}.png`)"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width:20rem;"
            class="m-3 text-secondary text-center"
          >
            <b-button
              v-if="!task.cart"
              @click="add(task)"
              href="#"
              variant="primary"
            >{{$t('home.completed')}}</b-button>
            <b-button
              v-if="task.cart"
              @click="add(task)"
              :disabled="task.cart"
              href="#"
              variant="warning"
            >{{$t('home.completed')}}</b-button>
          </b-card>
        </b-col>
      </b-row>
      <!--/Tasks-->

      <b-row>
        <!--filtering-->
        <b-col>
          <h2 class="text-secondary text-center">{{$t('home.list')}}</h2>
          <b-input-group size="md" class="col-md-12 my-4">
            <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Search"></b-form-input>
            <b-input-group-append>
              <b-button variant="primary" :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
        <!--/filtering-->
      </b-row>
      <b-row>
        <b-col>
          <!--Completed tasks-->
          <b-table
            class="text-secondary"
            bordered
            hover
            :items="cart"
            :fields="fields"
            :filter="filter"
            :filterIncludedFields="filterOn"
            @filtered="onFiltered"
          ></b-table>
          <!--/Completed tasks-->
        </b-col>
      </b-row>
      <b-row v-if="cart.length > 0">
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
      </b-row>
      <b-row v-if="cart.length >0">
        <b-col>
          <b-button @click="clean" variant="info" block class="mr-2">Clean</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      search: "",
      filter: null,
      filterOn: [],
      ticket: {
        tasks: null
      },
      tasks: [
        {
          id: 1,
          image: "@/assets/img1.png",
          name: "Buy bread",
          cart: false,
        },

        {
          id: 2,
          image: "@/assets/img2.png",
          name: "Buy fruits",
          cart: false,
        },
        {
          id: 3,
          image: "@/assets/img3.png",
          name: "Buy vegetables",
          cart: false,
        },
        {
          id: 4,
          image: "@/assets/img4.png",
          name: "Buy milk",
          cart: false,
        },
        {
          id: 5,
          image: "@/assets/img4.png",
          name: "Buy meat",
          cart: false,
        },
        {
          id: 6,
          image: "@/assets/img6.png",
          name: "Buy fish",
          cart: false,
        }
      ],
      cart: [],
      fields: ["id", "name"]
    };
  },
  methods: {
    add(task) {
      this.tasks[task.id - 1].cart = true;
      this.cart.push(task);
    },
    clean() {
      this.cart = [];
      for (const key in this.tasks) {
        this.tasks[key].cart = false;
      }
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>
