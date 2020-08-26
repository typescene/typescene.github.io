{% for page in site.guides %}
{% if page.slug contains include.match %}
[**Guide:** {{page.title}}]({{ page.url }}){:.block_link.guide}
{% endif %}
{% endfor %}
