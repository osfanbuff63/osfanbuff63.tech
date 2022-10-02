<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown'
    const source = `
    # Header

    > this is a blockquote

    \`\`\`python
    def markdown():
      """Markdown test"""
      print("does it work?")
    \`\`\`
    `
</script>

<SvelteMarkdown {source}/>