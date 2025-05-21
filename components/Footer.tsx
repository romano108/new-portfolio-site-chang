"use client";

export default function Footer() {
  return (
    <section>
      <div className="flex flex-col gap-4 lg:px-6 mt-16">
        <p className="text-sm text-start text-muted-foreground">
          Based on{" "}
          <a className="text-foreground" href="https://brittanychiang.com">
            Brittany Chiang&#39;s website and
          </a>
          <a className="text-foreground" href="https://meikopoulos.com">
            {" "}
            Meikopoulos
          </a>
          .
        </p>
      </div>
    </section>
  );
}
