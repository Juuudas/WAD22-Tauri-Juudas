<template>
  <div>
    <h3> Semesters </h3>
    <table>
      <tr>
        <th>Code</th>
        <th>Title</th>
        <th>Semester</th>
        <th>Credits</th>
        <th>Description</th>
      </tr>
      <tr class="item" v-for="course in courses" :key="course.id">
        <td> {{ course.code }} </td>
        <td>{{ course.title}} </td>
        <td> {{ course.semester}}</td>
        <td>{{ course.credits }} </td>
        <!--
            <td>{{ course.description }} </td>
        -->
        <td v-if="course.description === ''">No course description is provided.</td>
        <td v-else>{{course.description}}</td>
      </tr>

    </table>
  </div>
</template>

<script>
export default {
  name: "Semester",
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    fetchCourses() {
      fetch(`http://localhost:3000/api/courses/`)
          .then((response) => response.json())
          .then((data) => (this.courses = data))
          .catch((err) => console.log(err.message));
    },
  },
  getCourses(semester) {
    fetch(`http://localhost:3000/api/routes/${semester}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
        .then((response) => {
          //console.log(response.data);
          this.$router.push("/semesters/spring");
        })
        .catch((e) => {
          console.log(e);
        });
  },
  mounted() {
    this.fetchCourses();
    console.log("mounted");
  }
};
</script>

<style scoped>
h3 {
  font-size: 25px;
}
th {
  background: rgb(100, 151, 122);
}
td {
  background: rgb(186, 228, 204);
}
th, td {
  font-size: 15px;
  margin-bottom: 5px;
  padding: 8px 10px;
}
</style>