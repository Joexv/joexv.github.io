---
layout: page
title: Projects
permalink: /projects/
sidebar: true
---

{% comment %} Featured first {% endcomment %}
{% assign featured = site.projects 
   | where:"featured", true 
   | sort:"year" 
   | reverse %}
{% if featured.size > 0 %}
## Featured
<div class="project-grid featured-grid">
  {% for project in featured %}
    <div class="project-card featured">
      <a href="{{ project.url }}">
        {% if project.thumbnail %}
       <div class="project-thumb" style="background-image:url('{{ project.thumbnail | relative_url }}')"></div>
      {% if project.image %}
        <div class="project-thumb" style="background-image:url('{{ project.image | relative_url }}')"></div>
        {% endif %}
        <h3>{{ project.title }}</h3>
        <p>{{ project.summary }}</p>
      </a>
    </div>
  {% endfor %}
</div>
{% endif %}

{% comment %} Then the rest {% endcomment %}
{% assign others = site.projects 
   | where_exp:"p","p.featured != true" 
   | sort:"year" 
   | reverse %}
{% if others.size > 0 %}
## All Projects
<div class="project-grid">
  {% for project in others %}
    <div class="project-card">
      <a href="{{ project.url }}">
        {% if project.thumbnail %}
       <div class="project-thumb" style="background-image:url('{{ project.thumbnail | relative_url }}')"></div>
      {% if project.image %}
        <div class="project-thumb" style="background-image:url('{{ project.image | relative_url }}')"></div>
        {% endif %}
        <h3>{{ project.title }}</h3>
        <p>{{ project.summary }}</p>
      </a>
    </div>
  {% endfor %}
</div>
{% endif %}
