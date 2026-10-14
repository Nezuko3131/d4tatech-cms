import { defineType, defineField } from "sanity";

export const heroContent = defineType({
  name: "heroContent",
  title: "Hero / Inicio Content",
  type: "document",
  fields: [
    defineField({
      name: "titlePrefix",
      title: "Title Prefix (small line above main title)",
      type: "string",
      initialValue: "Transformo datos en decisiones estratcgicas y desarrollo soluciones web",
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "mainTitle",
      title: "Main Title (h1)",
      type: "string",
      initialValue: "D4taTech",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "specialties",
      title: "Specialties (Power BI, Python, SQL, ML)",
      type: "string",
      initialValue: "Power BI · Python · SQL · ML",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "knowledgeAreas",
      title: "Knowledge Areas (ETL, Data Warehousing, Analytics)",
      type: "string",
      initialValue: "ETL · Data Warehousing · Analytics",
      validation: (Rule) => Rule.required().max(200),
    }),
  ],
  preview: {
    select: { title: "mainTitle", subtitle: "titlePrefix" },
  },
});
