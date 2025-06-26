---
layout: page
title: Projects
permalink: /projects/
sidebar: true
---
{% assign others = site.projects 
   | sort:"year" 
   | reverse %}
{% if others.size > 0 %}
<section class="alt-projects">
  <div class="alt-grid">
    {% for project in others %}
      <article class="alt-card">
        <a href="{{ project.url }}" class="alt-card__link">
          {% if project.image %}
            <div
              class="alt-card__thumb"
              style="background-image:url('{{ project.image | relative_url }}')"
            ></div>
          {% endif %}
          <div class="alt-card__body">
            <h3 class="alt-card__title">{{ project.title }}</h3>
            <p class="alt-card__summary">{{ project.summary }}</p>
          </div>
        </a>
      </article>
    {% endfor %}
  </div>
</section>
{% endif %}