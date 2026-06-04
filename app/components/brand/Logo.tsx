import Image from "next/image";

export function Logo() {
  return (
    <>
      <Image
        src="/assets/jcrea-logo.svg"
        className="object-cover"
        alt="Logo Jenny portfolio"
        width={46}
        height={46}
        priority
      />
    </>
  );
}
