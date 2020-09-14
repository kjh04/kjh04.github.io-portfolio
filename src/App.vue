<template>
  <v-app :style="appStyle" >
    <v-app-bar
      app
      dark
      color="#29335C"
    >
      <!-- <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon> -->
    </v-app-bar>
    <!-- <v-navigation-drawer 
      v-model="drawer" 
      absolute
      temporary
      clipped
    >
      <v-list
        dense
        nav
      >
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Code</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Gallery</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="8">
            <v-card>
              <v-card-title>Welcome!</v-card-title>
              <v-card-subtitle>Portfolio of Kaitlyn Hoopingarner</v-card-subtitle>
              <div class="text--primary">
                <v-card-text>
                  I am a driven, organized, and detail oriented third year computer science student at Iowa State University pursuing my bachelor's degree.
                  I am interested in software enginnering and video game development - my two passions are art and technology.
                </v-card-text>
                <v-card-text>
                  LinkedIn: https://www.linkedin.com/in/kaitlynhoopingarner
                </v-card-text>
                <v-card-text>
                  Instagram (Art Portfolio): https://www.instagram.com/illustrating.kate/
                </v-card-text>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <div class="wordbreak">
                <v-card-title class="wordbreak">Languages and Frameworks</v-card-title>
              </div>
              <v-card-text>
                Java, C, C++, Python, HTML, CSS, JavaScript, Vue, Vuetify, git
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-title>Applications and Tools</v-card-title>
              <v-card-text>
                  Amazon Web Services, Visual Studio Code, Android Studio, Eclipse, Microsoft Office, Power BI,
                  Jira, GitLab, Chrome Debugger Tools
                </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-title>Concepts</v-card-title>
               <v-card-text>
                  SCRUM/Agile Development, Object Oriented Programming, Cloud Based Computing, Micro-Services, Website
                  Development, Document Oriented Databases
                </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-title>Interpersonal Skills</v-card-title>
              <v-card-text>
                  Written and Verbal Communication, Time Management, Critical Thinking, Problem Solving, Organization,
                  Diligence, Public Speaking, Attention to Detail, Empathy, Self-Motivation, Active Team Player, Excited Learner, Quick
                  Learner
                </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-card>
            <v-card-title>Code</v-card-title>
            <v-card-text class="bold">
              "Modeling the World"
            </v-card-text>
            <v-card-text>
              During my time at the Virtual Reality Applications Center, most of my work was focused around the concept of modeling.
              I worked on creating mathematical models of formulas in python which were integrated into Amazon Web Services with the Lambda service.
              I then began working on developing a web-based user interface to allow users to make calculations using the system I helped develop in our team.
              These efforts are all in pursuit of one the goals of the team I was working on - to model the world.
              The calculations made in the models of our system are meant to model energy use in a village or rural community, eventually, we would like to build
              our library of models so that we can extend our modelling capabilities from a village to the world.
            </v-card-text>
            <v-card-text class="bold">
              Project Status Report System
            </v-card-text>
            <v-card-text>
              During my internship in the IT department's research and development team, I helped develop a system to allow
              upper management to gather information regarding current projects happening in the IT department so that they
              can generate reports for meetings with their higher ups and business users/clients of Tyson.
              The application was web based which was written using the Vue and Vuetify frameworks. 
              We also utilized Power BI to deliver data.
            </v-card-text>
            <v-card-text class="bold">
              Cookbooker
            </v-card-text>
            <v-card-text>
              I am in the process of developing a meal planning app as a personal project.
              To develop the app, I am using Android Studio.
              In this app, the user will be able to create a library of recipes which they can use to plan out their
              meals, and generate groceries lists. I am currently working on developing the create, read, update, and delete functionalites
              of the recipe library.
            </v-card-text>
            <v-card-text class="bold">
              Word Search Solver
            </v-card-text>
            <v-card-text>
              One personal project I ahve been working on is a word search solver. I want to develop a python application in which the 
              user provides a word search and the word bank for that word search, and the program completes the word search.
              This project is a work in progress. I am currently figuring out the best search algorithm to use to parse the 
              word search.
            </v-card-text>
          </v-card>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    drawer: false,
    appStyle: {background: '#C0BDA5'}
  }),
};
</script>

<style scoped>
.wordbreak {
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
}
.bold {
  font-weight: bold;
}
</style>
