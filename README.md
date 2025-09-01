# Web3 UX Portfolio

A Jekyll-based portfolio website optimized for Web3 UX designers, with dual deployment to traditional web and IPFS/ENS.

## Quick Start

1. **Install dependencies:**
   ```bash
   bundle install
   npm install
   ```

2. **Development:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Structure

- `_projects/` - Your UX case studies as markdown files
- `_layouts/` - Page templates
- `_includes/` - Reusable components
- `assets/` - Images, CSS, and other assets

## Deployment

### GitHub Pages
Push to `main` branch for automatic deployment.

### IPFS + ENS
1. Build the site: `npm run build`
2. Deploy to IPFS: `npm run deploy-ipfs`
3. Update your ENS domain to point to the new IPFS hash

## Customization

- Edit `_config.yml` for site settings
- Modify `tailwind.config.js` for styling
- Add your projects to `_projects/`
- Update colors and branding in `assets/css/main.css`