# Seattle Style Remodel

Update the CURRENT website for **Deinega Remodel**. Do not rebuild from scratch.

Business:

* Name: Deinega Remodel
* Email: [dejnegapavlo3@gmail.com](mailto:dejnegapavlo3@gmail.com)
* Location: Seattle, WA, United States
* Colors: **#1A312C** and **#428475**

Create an **ultra-premium, modern, cinematic remodeling website**. Avoid generic AI/template layouts. Use dark green, warm neutrals, clean typography, subtle motion, depth, and premium visuals.

### Sections

**Hero:** Full-screen cinematic remodeling/home transformation visual, premium typography, subtle animation, strong CTA.

**Services:** Premium remodeling services with creative layouts, not basic card grids.

**Projects:** High-end project showcase with large visuals, scroll reveal, depth, and smooth animations.

**Before & After:** Interactive transformation comparison with premium visuals.

**Testimonials:** Integrate the provided `TestimonialsColumn` component. Copy it to `/components/ui/testimonials-columns-1.tsx`, install `motion`, and use it as the Testimonials section. Replace ERP content with realistic Deinega Remodel customer reviews and use relevant homeowner/project roles and Unsplash images. Keep the 3-column vertical infinite-scroll effect responsive.

**About:** Place the About section near the end, before Contact. Make it completely different from a basic image-left/text-right layout. Create a premium editorial storytelling experience with overlapping images, large background typography, floating content, layered composition, scroll reveals, and architectural-style design.

**Contact:** Premium quote/contact section using:

* Name
* Email
* Phone
* Project Type
* Message

Page order:
**Hero → Services → Projects → Before & After → Testimonials → About → Contact → Footer**

Keep everything responsive, fast, and smooth with no horizontal overflow.

Reuse existing React, Tailwind, TypeScript, shadcn, and animation setup. Only add dependencies if required. Use `lucide-react` icons when needed.

The final result must feel like a **custom high-end Seattle remodeling brand**, not a generic contractor website.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://deinega-cinematic-remodel.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fefe4868-2f37-4ce1-8f57-50bef6bf3041).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
