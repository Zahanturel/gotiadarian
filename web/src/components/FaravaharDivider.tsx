import Image from "next/image";

export function FaravaharDivider() {
  return (
    <div className="faravahar-divider mb-10">
      <div className="divider-icon">
        <Image
          src="/assets/faravahar.png"
          alt="Faravahar symbol, emblem of Zoroastrianism"
          width={32}
          height={32}
          className="object-contain"
        />
      </div>
    </div>
  );
}
