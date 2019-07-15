resource "cloudflare_record" "insultr" {
  domain  = "psliwka.app"
  name    = "insultr"
  type    = "CNAME"
  value   = "psliwka.github.io"
  proxied = false
}
