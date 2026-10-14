import { defineType, defineField } from "sanity";

export const headerSettings = defineType({
  name: "headerSettings",
  title: "Header Settings",
  type: "document",
  fields: [
    defineField({
      name: "logoText",
      title: "Logo Text",
      type: "string",
      initialValue: "D4taTech",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "logoHref",
      title: "Logo Link URL",
      type: "string",
      initialValue: "#inicio",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "_HABLEMOS",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "ctaButtonShow",
      title: "Show CTA Button",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "chatShow",
      title: "Show Chat Trigger",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "logoText", subtitle: "ctaButtonText" },
  },
});
