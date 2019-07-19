terraform {
  backend "remote" {
    organization = "psliwka"

    workspaces {
      name = "insultr"
    }
  }
}

resource "cloudflare_record" "insultr" {
  domain  = "psliwka.app"
  name    = "insultr"
  type    = "CNAME"
  value   = "psliwka.github.io"
  proxied = false
}
