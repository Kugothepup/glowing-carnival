module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './_projects/*.md',
    './index.html',
    './**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'web3-purple': '#6366f1',
        'web3-blue': '#3b82f6',
        'web3-green': '#10b981'
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}