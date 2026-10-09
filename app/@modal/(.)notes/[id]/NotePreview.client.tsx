"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NoteDetails from "@/app/notes/[id]/NoteDetails.client";

export default function NotePreviewClient() {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NoteDetails />
    </Modal>
  );
}
