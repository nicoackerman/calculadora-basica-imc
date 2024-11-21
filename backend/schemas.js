import z from 'zod'
const GeneroSchema = z.object({
  id: z.number().int().positive({
    required_error: "El ID del género es obligatorio y debe ser un número entero positivo.",
  }),
  genero: z.string({
    required_error: "El género es obligatorio y debe ser una cadena de texto.",
  }).max(50, "El género no puede exceder los 50 caracteres."),
});

// Esquema para la tabla `programas`
const ProgramaSchema = z.object({
  id: z.number().int().positive({
    required_error: "El ID del programa es obligatorio y debe ser un número entero positivo.",
  }),
  programa: z.string({
    required_error: "El nombre del programa es obligatorio y debe ser una cadena de texto.",
  }).max(100, "El nombre del programa no puede exceder los 100 caracteres."),
});

// Esquema para la tabla `registros_imc`
const RegistroIMCSchema = z.object({
  fecha_nacimiento: z.string({
    required_error: "La fecha de nacimiento es obligatoria y debe ser una cadena de texto en formato ISO (YYYY-MM-DD).",
  }).regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha de nacimiento debe estar en formato YYYY-MM-DD."),
  genero_id: z.number().int().positive({
    required_error: "El ID del género es obligatorio y debe ser un número entero positivo.",
  }),
  programa_id: z.number().int().positive({
    required_error: "El ID del programa es obligatorio y debe ser un número entero positivo.",
  }),
  peso_kg: z.number({
    required_error: "El peso en kg es obligatorio y debe ser un número.",
  }).positive("El peso debe ser un valor positivo."),
  altura_m: z.number({
    required_error: "La altura en metros es obligatoria y debe ser un número.",
  }).positive("La altura debe ser un valor positivo."),
  imc_kg_m2: z.number({
    required_error: "El índice de masa corporal (IMC) es obligatorio y debe ser un número.",
  }).positive("El IMC debe ser un valor positivo.")
});

export function validateRegister (input) {
  return RegistroIMCSchema.safeParse(input)
}


const genderNameSchema = z.string({
  required_error: "El nombre del género es obligatorio y debe ser una cadena de texto.",
}).max(50, "El nombre del género no puede exceder los 50 caracteres.");

export function validateGender(gender) {
  return genderNameSchema.safeParse(gender);
}

const programNameSchema = z.string({
  required_error: "El nombre del programa academico es obligatorio y debe ser una cadena de texto.",
}).max(50, "El nombre del programa no puede exceder los 50 caracteres.");

export function validateProgram(genero) {
  return programNameSchema.safeParse(genero);
}


