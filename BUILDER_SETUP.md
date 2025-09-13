# Builder.io Setup Guide

This project is configured to work with Builder.io as a headless CMS. Follow these steps to get started:

## 1. Get Your Builder.io API Key

1. Go to [Builder.io](https://builder.io) and create an account
2. Create a new space or use an existing one
3. Go to Account Settings → Space Settings → API Keys
4. Copy your Public API Key

## 2. Configure Environment Variables

1. Create a `.env.local` file in the root of your project
2. Add your Builder.io API key:

```bash
NEXT_PUBLIC_BUILDER_API_KEY=your_api_key_here
```

## 3. Set Up Your Builder.io Space

1. In your Builder.io dashboard, create a new model called "page"
2. Set the preview URL to: `http://localhost:3000`
3. Set the targeting to URL and use `/*` to match all pages

## 4. Custom Components Available

The following custom components are registered and available in Builder.io:

### Hero Component

- **Title**: Main heading text
- **Subtitle**: Subheading text
- **Background Image**: Hero background image
- **CTA Text**: Call-to-action button text
- **CTA Link**: Call-to-action button link

### Plant Card Component

- **Name**: Plant name
- **Description**: Plant description
- **Image**: Plant image
- **Care Level**: Easy, Medium, or Hard

### Feature Section Component

- **Title**: Section title
- **Features**: List of features with title, description, and icon

## 5. Creating Pages

1. In Builder.io, click "New" → "Page"
2. Set the URL path (e.g., `/about`, `/plants`, etc.)
3. Drag and drop components to build your page
4. Use the custom components for plant-specific content
5. Publish your page

## 6. File Structure

```
src/
├── lib/
│   └── builder.ts          # Builder.io configuration
├── components/
│   ├── builder.tsx         # Main Builder component
│   └── custom-components.tsx # Custom registered components
└── app/
    ├── [...page]/
    │   └── page.tsx        # Dynamic route handler
    └── page.tsx            # Homepage with Builder.io integration
```

## 7. Development

1. Start the development server: `npm run dev`
2. Open Builder.io and start creating pages
3. Pages will automatically appear at their configured URLs
4. The homepage (`/`) will show Builder.io content if available, otherwise shows the default page

## 8. Deployment

When deploying, make sure to:

1. Set the `NEXT_PUBLIC_BUILDER_API_KEY` environment variable
2. Update the preview URL in Builder.io to your production domain
3. Update any hardcoded URLs in your Builder.io content

## Troubleshooting

- **Pages not showing**: Check that your API key is correct and the page URL matches
- **Custom components not appearing**: Make sure `custom-components.tsx` is imported in `builder.tsx`
- **Preview not working**: Ensure your preview URL in Builder.io matches your development server

## Next Steps

- Add more custom components for your plant CMS needs
- Set up Builder.io's A/B testing features
- Configure Builder.io's personalization features
- Add Builder.io's analytics integration
