import * as React from "react";
import { AwardsNavbar } from "../organisms/AwardsNavbar";
import { AwardsJury } from "../organisms/AwardsJury";
import { AwardsFooter } from "../organisms/AwardsFooter";

export function AwardsJuryPage() {
  return (
    <>
      <AwardsNavbar />
      <div className="page-wrapper-home awards-home-scope">
        <AwardsJury showYearFilters />
        <AwardsFooter />
      </div>
    </>
  );
}
