---
layout: page
title: Resume
permalink: /resume/
sidebar: true
---
<div class="resume-grid grid grid-cols-1 md:grid-cols-2 gap-6">
  {% for doc in site.data.bio.downloads %}
    <div class="resume-card text-center p-6 bg-gray-bg rounded-lg shadow-md">
      <!-- unique icon per resume -->
      <div class="resume-icon mb-4">
        {% case doc.name %}
        {% when "Game Design Resume" %}
          <i class="fas fa-gamepad fa-4x"></i>
        {% when "IT Resume" %}
          <i class="fas fa-desktop fa-4x"></i>
        {% when "Japanese Resume" %}
          <i class="fas fa-language fa-4x"></i>
        {% when "Shokumukeirekisho" %}
          <i class="fas fa-clipboard-list fa-4x"></i>
        {% else %}
          <i class="fas fa-file-alt fa-4x"></i>
        {% endcase %}
      </div>
      <!-- title -->
      <h3 class="mb-4 font-bold">{{ doc.name }}</h3>
      <!-- download buttons -->
      <div class="flex justify-center space-x-4">
        <a href="{{ doc.pdf }}" class="btn-outline">PDF</a>
        <a href="{{ doc.docx }}" class="btn-outline">DOCX</a>
      </div>
    </div>
  {% endfor %}
</div>
