<template>
  <div id="app">
    <header class="bg-primary text-white text-center py-5">
      <h1>{{ fullName }}</h1>
      <p class="position">{{ position }}</p>
      <p class="about text-justify">{{ about }}</p>
    </header>

    <main class="container mt-5">
      <section id="experience" class="mb-5">
        <h2 class="mb-4">Professional Experience</h2>
        <div
          v-for="(job, index) in experience"
          :key="index"
          class="mb-4 p-3 border rounded"
        >
          <h3>{{ job.company }}</h3>
          <p class="text-muted">
            <strong>{{ job.position }}</strong>
          </p>
          <p class="text-muted">{{ job.timeperiod }}</p>
          <p class="text-justify">{{ job.description }}</p>
          <a
            v-if="job.website && job.website !== 'http://127.0.0.1'"
            :href="job.website"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline-primary btn-sm"
          >
            Visit Website
          </a>
        </div>
      </section>

      <section id="skills" class="mb-5">
        <h2 class="mb-4">Main Technologies</h2>
        <div class="row">
          <div v-for="(skill, index) in uniqueSkills" :key="index" class="col-md-6 mb-3">
            <div class="skill-item">
              <div class="d-flex justify-content-between">
                <span>{{ skill.name }}</span>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{ width: skill.level + '%' }"
                  :aria-valuenow="skill.level"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="mb-5">
        <h2 class="mb-4">Projects</h2>
        <div class="row">
          <div v-for="(project, index) in projects" :key="index" class="col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h3 class="card-title">{{ project.name }}</h3>
                <p class="card-text text-muted">
                  {{ project.platform }} | {{ project.timeperiod }}
                </p>
                <p class="card-text text-justify">{{ project.description }}</p>
                <a
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="mb-5">
        <h2 class="mb-4">Contact</h2>
        <div class="contact-info">
          <p>
            <i class="fas fa-envelope"></i>
            <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
          </p>
          <p>
            <i class="fab fa-linkedin"></i>
            <a :href="contact.website" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </p>
          <p>
            <i class="fab fa-github"></i>
            <a
              :href="`https://github.com/${contact.github}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { PERSON } from "../data.ts";

export default {
  name: "AppHome",
  data() {
    return {
      ...PERSON,
      fullName: ` ${PERSON.name.first} ${PERSON.name.last}`,
    };
  },
  computed: {
    uniqueSkills() {
      const uniqueSkills = Array.from(
        new Map(PERSON.skills.map((skill) => [skill.name, skill])).values()
      );
      return uniqueSkills.sort((a, b) => b.level - a.level);
    },
  },
};
</script>

<style scoped>
.progress {
  height: 8px;
  margin-top: 4px;
}

.skill-item {
  margin-bottom: 1rem;
}

.contact-info p {
  margin-bottom: 1rem;
}

.contact-info i {
  margin-right: 10px;
  width: 20px;
}

.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.position {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.about {
  max-width: 800px;
  margin: 1rem auto;
  padding: 0 1rem;
}

.text-justify {
  text-align: justify;
  text-justify: inter-word;
}

header {
  background: linear-gradient(135deg, #012499 0%, #0056b3 100%);
  padding: 3rem 0;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .card {
    margin: 0 0.5rem;
  }
}
</style>
