import { db } from "../api/firebase";
import {  collection, getDocs, addDoc, query, orderBy, doc, where, } from "firebase/firestore";
// referencia a la collection
const noticiasRef = collection(db, "noticias");

export async function obtenerNoticias(titulo) {
  try {
    let q = query(noticiasRef, orderBy("fechaHora", "desc"));

    if (titulo) {
      const startAt = titulo;
      const endAt = titulo + '\uf8ff';
      q = query(
        noticiasRef,
        where("titulo", ">=", startAt),
        where("titulo", "<=", endAt),
        orderBy("titulo", "asc"),
      );
    }

    const snap = await getDocs(q);
    const array = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    return array;
  } catch (err) {
    console.error("Error obtenerNoticias:", err);
  }
}

export async function agregarNoticia({ titulo, contenido, imagenUrl }) {
  const noticia = {
    titulo: titulo.trim(),
    fechaHora: new Date(),
    imagenUrl: imagenUrl.trim(),
    contenido: contenido.trim(),
  };
  await addDoc(noticiasRef, noticia);
}

export function formatDate(d) {
  // formatear fecha
  const date = new Date(d.seconds * 1000);
  return date.toLocaleDateString("es-SV", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
