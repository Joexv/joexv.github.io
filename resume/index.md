---
layout: page
title: Resume
permalink: /resume/
sidebar: true
---

<div class="resume-grid">
  {% for doc in site.data.bio.downloads %}
    <div class="resume-card">
      <h3>{{ doc.name }}</h3>
      <p>
        <a href="{{ doc.pdf }}" class="btn">PDF</a>
        <a href="{{ doc.docx }}" class="btn-outline">DOCX</a>
      </p>
    </div>
  {% endfor %}
</div>
