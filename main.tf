terraform {
  backend "remote" {
    organization = "psliwka"

    workspaces {
      name = "insultr"
    }
  }
}
